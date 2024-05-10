import {ref} from "vue";
import {defineStore} from "pinia";
import {allAddresses, createAddress, updateAddress, removeAddress} from "../http/addresses-api";

export const useAddressStore = defineStore('addressStore', () => {
  const addresses = ref([])

  const fetchAllAddresses = async () => {
    const {data} = await allAddresses();
    addresses.value = data.data
  }

  const handleAddedAddress = async (newAddress) => {
    const {data: createdAddress} = await createAddress(newAddress)
    addresses.value.unshift(createdAddress.data)
  }

  const handleUpdatedAddress = async (address) => {
    const {data: updatedAddress} = await updateAddress(address.id, {
      user_id: updatedAddress.user_id,
      id: updatedAddress.id,
      recipient: updatedAddress.recipient,
      cep: updatedAddress.cep,
      address: updatedAddress.address,
      number: updatedAddress.number,
      complement: updatedAddress.complement,
      reference: updatedAddress.reference,
      neighborhood: updatedAddress.neighborhood,
      city: updatedAddress.city,
      state: updatedAddress.state
    })
  }

  const handleRemovedAddress = async (address) => {
    await removeAddress(address.id);
    const index = addresses.value.findIndex((item) => item.id === address.id);
    address.value.splice(index, 1);
  };

  return {
    addresses,
    fetchAllAddresses,
    handleAddedAddress,
    handleRemovedAddress,
    handleUpdatedAddress,
  }
})
