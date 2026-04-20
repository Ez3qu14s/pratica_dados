export default function stringParaData(dataString: string) {
  const dataTime = dataString.split(" ");
  const [dia, mes, ano] = dataTime[0].split("/");
  const [hora, minuto] = dataTime[1];

  const data = new Date(+ano, +mes - 1, +dia, +hora, +minuto);

  return data;
}
