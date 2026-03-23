import Badge from "@/app/ui/badge";

interface Props {
  items: string[];
}

export default function BadgeRow(props: Props) {
  const badges = props.items.map((i, k) => {
    return <Badge key={k} content={i} />
  });

  return(
    <div className="flex flex-wrap mx-1 mb-4">
      {badges}
    </div>
  )
}