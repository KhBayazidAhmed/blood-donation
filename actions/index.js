"use server";
import connectToDatabase from "@/db/Connection";
import person from "@/db/person";

export async function AddData(formData) {
  try {
    console.log(formData);
    await connectToDatabase();
    const data = new person({
      name: formData.get("name"),
      mobile: formData.get("mobile"),
      location: formData.get("location"),
      bloodGroup: formData.get("bloodGroup"),
      division: formData.get("division"),
      district: formData.get("district"),
      upazila: formData.get("upazila"),
    });

    await data.save();
    return "Data added successfully";
  } catch (error) {
    console.log(error.message);
    return error.message;
  }
}
export async function GetData() {
  try {
    await connectToDatabase();
    const data = await person.find(
      {},
      { _id: 0 },
    );
    return {
      data: data,
   
    };
  } catch (error) {
    console.log(error.message);
    return error.message;
  }
}
