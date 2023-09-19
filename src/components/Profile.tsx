export default function Profile() {
    return (
        <div className={`min-h-screen flex flex-col justify-center items-center bg-gradient-to-tr from-black to-zinc-800`}>
            <div className={`flex flex-row justify-between gap-4 pb-3`}>
                <h1>About</h1>
                <h1>My Jobs</h1>
            </div>
            <hr className="w-full"></hr>
            <div className={`p-8 w-full text-center`}>
                <h1 className="text-3xl">
                    Geraldo Daros
                </h1>
            </div>
            <hr className="w-full"></hr>
        </div>
    )
}