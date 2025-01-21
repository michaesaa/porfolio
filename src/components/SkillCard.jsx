export const SkillCard = ({
    imgSrc,
    label,
    desc,
    classes
}) => {
    return (
        <div className={'flex items-center gap-3 ring-2 ring-insett ring-zinc-50/50 rounded-2xl p-3 hover:ring-zinc-50' + classes }>
            <figure className="bg-zinc-700/50">
                <img
                    src={imgSrc}
                    width={32}
                    height={32}
                    alt={label}
                />
            </figure>
            <div>
                <h3>{label}</h3>
                <p className="">
                    {desc}
                </p>
            </div>
        </div>
    )
}