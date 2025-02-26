export default function ClubItem({ club }) {

  return (
    <li className="w-[10rem] h-[10rem] rounded-2xl text-center shadow-lg bg-slate-400 m-2">
      <article className=" flex flex-col justify-between">
        <div className="p-4 justify-center items-center flex flex-row">
          <div>
            <img src={club.crest} alt={club.name} className="w-33 h-23 justify-center items-center" />
            <div>
              <h1 className="text-sm font-bold mt-2">{club.name}</h1>
            </div>
          </div>
        </div>
      </article>
    </li>
  );
}
