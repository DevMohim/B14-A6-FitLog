import MyPlans from "@/components/MyPlanPage/MyPlans";
import { Metadata } from "next";



export const metadata: Metadata = {
  title: "Fit-log | My-Plan",
  description: "Explore your today's plans and saved plans",
};



const MyPlanPage = () => {
  return <MyPlans />
  
};

export default MyPlanPage;
