import Badge from "./Badge";
import ProgressBar from "./ProgressBar";

export default function TableRow({
  name,
  type,
  status,
  statusVariant,
  progress,
  vulnerabilities,
  lastScan,
}) {
  return (
    <tr className="border-b last:border-none hover:bg-neutral-50 dark:hover:bg-darkbg-light">
      <td className="py-4 font-medium text-neutral-800 dark:text-lightbg">
        {name}
      </td>
      <td className="text-neutral-600 dark:text-neutral-400">{type}</td>
      <td>
        <Badge variant={statusVariant}>{status}</Badge>
      </td>
      <td className="w-56">
        <ProgressBar percentage={progress} colorClass="bg-primary" />
      </td>
      <td>
        <div className="flex gap-2">
          {vulnerabilities.map((v, i) => (
            <Badge key={i} variant={v.variant}>
              {v.count}
            </Badge>
          ))}
        </div>
      </td>
      <td className="text-neutral-500 dark:text-neutral-400">{lastScan}</td>
    </tr>
  );
}
