import man from "../assets/man-header-section.png"

const HeaderSection = () => {
    return (
        <div className="flex bg-gradient-to-r from-customGreenStart to-customGreenEnd text-white pt-[4rem]">
            <div className="py-20 ml-36 w-2/3">
                <h1 className="text-5xl font-bold font-poppins">Collaborer et <br></br>Entreprendre</h1>
                <p className="font-montserrat font-medium mt-2">Le meilleur endroit pour démarrer vos projets et vous challengez !</p>
                <div className="flex mt-4">
                    <button className="bg-white py-1 px-4 text-green-tb rounded mr-2">Découvrir</button>
                    <button className="border-2 py-1 px-4 text-white rounded mr-2">Contact</button>
                </div>
            </div>
            <div className="w-1/3 mr-36 flex flex-col justify-end">
            <img 
                    src={man} 
                    alt="Logo" 
                    className="h-80 w-80 mr-2" 
                    style={{ filter: 'drop-shadow(0px 0px 140px #ffffff)' }}
                />
            </div>
        </div>
    );
};

export default HeaderSection;
