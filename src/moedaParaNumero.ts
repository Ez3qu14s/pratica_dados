export default function moedaParaNumero(num: string) {
  const spliceNum = num.split(',')[0].replace('.', '')
  const conversao = Number(spliceNum)

  if(num === "-") {
    return null
  }

  return conversao
}