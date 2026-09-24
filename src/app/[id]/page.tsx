import AddPlanBtn from '@/components/DetailsPage/AddPlanBtn';
import { IWorkoutType } from '@/types/workout.type';
import Image from 'next/image';
import SavedLaterBtn from '@/components/DetailsPage/SavedLaterBtn'


interface DetailsPageProps {
   params : {
      id:string
   }
}



const DetailsPage = async({params}:DetailsPageProps) => {
   const {id} = await params

   const getSingleData = async () => {
     try {
       const res = await fetch(`https://api.abcz.workers.dev/api/fitlog/${id}`);

       if (!res.ok) {
         throw new Error("Data Fetching Failed");
       }
       return res.json();
     } catch {
       {
         return [];
       }
     }
   };

   const workout:IWorkoutType = await getSingleData()
   const {
     
     image,
     name,
     muscleGroups,
     equipment,
     duration,
     caloriesBurned,
     rating,
     description,
     difficulty,
     sets,
     reps,
     instructions
   } = workout;
   return (
     <section className="mt-16 text-white mb-16">
       <div className="container mx-auto px-4 py-12 grid grid-cols-1 lg:grid-cols-2 gap-14 ">
         {/* left image */}
         <div>
           <Image
             src={image}
             alt={name}
             width={590}
             height={800}
             className="rounded-2xl h-120 lg:h-175 w-full"
           />
         </div>

         {/* Right info */}
         <div className="flex flex-col ">
           <div>
             <h1 className="font-oswald font-bold text-4xl tracking-[0.45px] text-white leading-7 uppercase mb-3">
               {name}
             </h1>
             <p className="text-darkGray text-[16px] mb-5">{description}</p>
             <ul className="flex items-center gap-2 text-black font-bold text-[11px] mb-7">
               {muscleGroups.map((item: string, ind: number) => (
                 <li key={ind} className="px-2.5 py-0.5 bg-green rounded-full">
                   {item}
                 </li>
               ))}
             </ul>
           </div>

           <div className="mb-8">
             <ul className="bg-[#151922] rounded-2xl border border-[#232834]">
               <li className="px-6 py-3.5 flex justify-between items-center text-darkGray">
                 <h2 className="font-bold text-[12px] tracking-[0.6px] uppercase">
                   Equipment
                 </h2>
                 <p className="font-medium text-[14px] text-[#E5E7EB]">
                   {equipment}
                 </p>
               </li>

               <li className="px-6 py-3.5 flex justify-between items-center text-darkGray border-t border-t-[#1E2330]">
                 <h2 className="font-bold text-[12px] tracking-[0.6px] uppercase">
                   Difficulty
                 </h2>
                 <p className="font-medium text-[14px] text-[#E5E7EB]">
                   {difficulty}
                 </p>
               </li>

               <li className="px-6 py-3.5 flex justify-between items-center text-darkGray border-t border-t-[#1E2330]">
                 <h2 className="font-bold text-[12px] tracking-[0.6px] uppercase">
                   Sets
                 </h2>
                 <p className="font-medium text-[14px] text-[#E5E7EB]">
                   {sets}
                 </p>
               </li>

               <li className="px-6 py-3.5 flex justify-between items-center text-darkGray border-t border-t-[#1E2330]">
                 <h2 className="font-bold text-[12px] tracking-[0.6px] uppercase">
                   reps
                 </h2>
                 <p className="font-medium text-[14px] text-[#E5E7EB]">
                   {reps}
                 </p>
               </li>
               <li className="px-6 py-3.5 flex justify-between items-center text-darkGray border-t border-t-[#1E2330]">
                 <h2 className="font-bold text-[12px] tracking-[0.6px] uppercase">
                   duration
                 </h2>
                 <p className="font-medium text-[14px] text-[#E5E7EB]">
                   {duration}
                 </p>
               </li>
               <li className="px-6 py-3.5 flex justify-between items-center text-darkGray border-t border-t-[#1E2330]">
                 <h2 className="font-bold text-[12px] tracking-[0.6px] uppercase">
                   calories
                 </h2>
                 <p className="font-medium text-[14px] text-[#E5E7EB]">
                   {caloriesBurned}
                 </p>
               </li>
               <li className="px-6 py-3.5 flex justify-between items-center text-darkGray border-t border-t-[#1E2330]">
                 <h2 className="font-bold text-[12px] tracking-[0.6px] uppercase">
                   rating
                 </h2>
                 <p className="font-medium text-[14px] text-[#E5E7EB]">
                   {rating}
                 </p>
               </li>
             </ul>
           </div>

           {/* Instruction */}
           <div className="mb-9">
             <h1 className="uppercase font-extrabold text-[16px] text-white mb-4">
               Instructions
             </h1>

             <ul className="space-y-3">
               {instructions.map((item: string, ind: number) => (
                 <li key={ind} className="text-gray text-[14px]">
                   {ind + 1}. {item}
                 </li>
               ))}
             </ul>
           </div>

           {/* buttons */}
           <div className="flex items-center gap-4">
            <AddPlanBtn workout = {workout}/>
            <SavedLaterBtn workout={workout} />
           </div>
         </div>
       </div>
     </section>
   );
};

export default DetailsPage;