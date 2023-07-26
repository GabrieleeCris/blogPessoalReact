import axios from "axios";

const api = axios.create({
  baseURL: 'https://blogpessoal-ju1g.onrender.com'
})

export const cadastrarUsuario = async(url: string, dados: Object, setDados: Function) => {
  const resposta = await api.post(url, dados)
  setDados(resposta.data)
}