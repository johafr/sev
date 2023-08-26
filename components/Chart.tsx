import {
  Bar,
  CartesianGrid,
  ComposedChart,
  Legend,
  Line,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts"

type DiagramProps = {
  chartData: Array<any>
}

const Chart = ({ chartData }: DiagramProps) => {
  //Remove and replace with the computed chart data
  const dummyData: any[] = [
    { name: "2019", value: 200 },
    { name: "2020", value: 300 },
    { name: "2021", value: 400 },
    { name: "2022", value: 250 },
    { name: "2023", value: 10 },
  ]
  return (
    <ComposedChart width={500} height={250} data={dummyData}>
      <CartesianGrid stroke="#f2f2f2" />
      <XAxis dataKey="name" scale="band" />
      <YAxis />
      <Tooltip />
      <Legend />
      <Bar dataKey="value" barSize={20} fill="#013000" />
      <Line type="monotone" dataKey="value" stroke="#ed7d31" />
    </ComposedChart>
  )
}

export default Chart
