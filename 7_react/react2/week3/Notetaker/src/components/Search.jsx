

export default function Search ( { handleSearchChange }) {
    return (
        <div className="flex gap-3 bg-[#e9e9e9] rounded-lg p-2 items-start">
            <i className="fa fa-search"></i>
            <input
                type="text"
                className="bg-transparent w-full outline-none font-poppins text-sm"
                placeholder="Search your notes..."
                onChange={(e) => handleSearchChange(e.target.value)}
            />
        </div>
    )
}