interface Props {
  content: string;
}

export default function Badge(props: Props) {
  return (
    <div className="flex justify-center items-center bg-[#004a6f] dark:bg-[#687A8F] rounded-sm p-1 mr-2 mb-2">
      <p className="text-xs font-bold text-[#eff0ed] dark:text-[#152638]">{props.content}</p>
    </div>
  )
}