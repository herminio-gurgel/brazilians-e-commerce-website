import api from "./api"

const apiPath = import.meta.env.VITE_API_PATH
const resource = apiPath + "/addresses"

export const allAddresses = () => api.get(resource)

export const createAddress = address => api.post(resource, address)

export const updateAddress = (id, address) => api.put(`${resource}/${id}`, address)

export const removeAddress = id => api.delete(`${resource}/${id}`)

export const updateFavoriteAddress = (id, address) => api.patch(`${resource}/${id}/favorite-address`, address)
