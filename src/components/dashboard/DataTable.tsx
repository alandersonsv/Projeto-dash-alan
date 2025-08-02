import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

interface DataTableProps {
  columns: {
    title: string;
    key: string;
  }[];
  data: any[];
}

export function DataTable({ columns, data }: DataTableProps) {
  return (
    <Table>
      <TableCaption>A list of your performance.</TableCaption>
      <TableHeader>
        {columns.map((column) => (
          <TableHead key={column.key}>{column.title}</TableHead>
        ))}
      </TableHeader>
      <TableBody>
        {data.map((row, index) => (
          <TableRow key={index}>
            {columns.map((column) => (
              <TableCell key={column.key}>{row[column.key]}</TableCell>
            ))}
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
