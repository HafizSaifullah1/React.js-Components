export default function Navbar() {


    return (
        <>
            <div className="p-5  flex justify-between items-center bg-[black] text-white ">
                <div>
                    <img
                        width={60}
                        className="rounded-full"
                        src="https://images.rawpixel.com/image_png_800/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDIzLTA5L3Jhd3BpeGVsX29mZmljZV8yOF9mZW1hbGVfbWluaW1hbF9yb2JvdF9mYWNlX29uX2RhcmtfYmFja2dyb3VuZF81ZDM3YjhlNy04MjRkLTQ0NWUtYjZjYy1hZmJkMDI3ZTE1NmYucG5n.png" alt="" />
                </div>
                <div className="flex space-x-6 ml-6">
                    <p className="px2 hover:text-[green] cursor-pointer font-bold text-xl">  Home</p>
                    <p className="px2 hover:text-[green] cursor-pointer font-bold text-xl">  About</p>
                    <p className="px2 hover:text-[green] cursor-pointer font-bold text-xl">  Service</p>
                    <p className="px2 hover:text-[green] cursor-pointer font-bold text-xl">  Contact</p>
                </div>

            </div>

        </>
    );
}