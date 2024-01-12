import image1 from "../assets/image1.jpg"
import image2 from "../assets/image2.jpg"
import image3 from "../assets/image3.jpg"
import { Zap } from 'lucide-react';

const HomeContent = () => {
    return (
        <div>
            <div className="mx-36 pb-4 border-b">
                <div className="text-green-tb text-xl mt-8 font-medium font-poppins">
                    <p className="pl-8">TeamBrains qu'est ce que c'est ?</p>
                </div>

                <div className="flex">
                    <div className="w-1/2 p-8">
                        <img src={image1} className="rounded"/>
                    </div>
                    
                    <div className="w-1/2 p-8 my-auto">
                        <div>
                            <p className="font-montserrat">TeamBrains est une plateforme de mise en relation entre des entrepreneurs et des développeurs étudiants/apprenants. Ensemble, nous faisons naître des prototypes web et logiciels innovants.</p>
                        </div>
                        <div className="mt-4">
                            <button className="bg-green-tb py-1 px-4 text-white rounded mr-2">
                                Nous rejoindre
                            </button>
                        </div>
                    </div>
                </div>  
            </div>

            <div className="mx-36">
                <div className="text-green-tb text-xl mt-8 font-medium font-poppins">
                    <p className="pl-8">Quels bénéfices ?</p>
                </div> 

                <div className="flex justify-center p-8">
                    <div className="flex flex-col justify-center items-center">
                        <div>
                            <img src={image2} className="w-56 rounded-[32px]"/>
                        </div>
                        <div className="font-montserrat font-semibold text-lg mt-4">
                            <p>Étudiants</p>
                        </div>
                        <div>
                            <p className="mt-2 text-center">Challengez vous et acquérez de l'expérience en travaillant en équipe sur des projets concrets et réels.</p>
                        </div>
                        
                    </div> 

                    <div className="mt-24">
                        <Zap size={42} color="#00C673" />
                    </div>

                    <div className="flex flex-col justify-center items-center">
                        <div>
                            <img src={image3} className="w-56 rounded-[32px]"/>
                        </div>
                        
                        <div>
                            <p className="font-montserrat font-semibold text-lg mt-4">Entrepreneurs</p>
                        </div>

                        <div>
                            <p className="mt-2 text-center">Donnez vie à vos idées sans vous ruiner. Nos développeurs juniors vous aident à démarrer votre projet.</p>
                        </div>
                        
                    </div> 
                </div>
                
                <div className="mt-8 font-poppins text-center mb-24">
                    <button className="bg-green-tb py-1 px-4 text-white rounded mr-2">
                        Nous rejoindre 
                    </button>
                </div>
            </div>
        </div>
    );
};

export default HomeContent;
