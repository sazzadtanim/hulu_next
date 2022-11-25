export default function HeaderItem({ title, Icon }) {
  return (
    <div className="group flex flex-col flex-grow items-center m-4 cursor-pointer hover:text-white w-8 sm:w-20">
      <Icon className="h-8 mb-1 group-hover:animate-bounce " />
      <p className="tracking-widest opacity-0 group-hover:opacity-100">
        {title}
      </p>
    </div>
  );
}
