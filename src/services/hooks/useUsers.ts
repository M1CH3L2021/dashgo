import { useQuery } from "react-query"
import { api } from "../api"

type User = {
  id: string
  name: string
  email: string
  createdAt: string
}

type GetUsersResponse = {
  users: User[]
  totalCount: number
}

export const getUsers = async (currentPage: number): Promise<GetUsersResponse> => {
  const { data, headers } = await api.get('/users', {
    params: {
      page: currentPage
    }
  })

  const totalCount = Number(headers['x-total-count'])

  const users = data.users.map(user => {
    return {
      id: user.id,
      name: user.name,
      email: user.email,
      createdAt: new Date(user.createdAt).toLocaleDateString()
    }
  })

  return { 
    users,
    totalCount
   }
}

export function useUsers(currentPage: number) {
  return useQuery(['users', currentPage], () => getUsers(currentPage), {
    staleTime: 1000 * 60 * 10
  })
}