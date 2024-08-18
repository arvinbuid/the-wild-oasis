import supabase, {supabaseUrl} from "./supabase";

export async function getCabins() {
  const {data, error} = await supabase.from("cabins").select("*");

  if (error) {
    console.error(error);
    throw new Error("Cabins could not be loaded.");
  }

  return data;
}

export async function createCabin(newCabin) {
  // https://dzvzphczalsmiclfphyv.supabase.co/storage/v1/object/public/cabin-images/cabin-001.jpg
  const imageName = `${Math.random()}-${newCabin.image.name}`.replaceAll("/", "");

  const imagePath = `${supabaseUrl}/storage/v1/object/public/cabin-images/${imageName}`;

  // 1. Create cabin
  const {data, error} = await supabase
    .from("cabins")
    .insert([{...newCabin, image: imagePath}])
    .select();

  if (error) {
    console.error(error);
    throw new Error("Cabin could not be deleted.");
  }

  // 2. If successful, upload cabin image into supabase
  const {error: storageError} = await supabase.storage
    .from("cabin-images")
    .upload(imageName, newCabin.image);

  // 3. Delete cabin if there was an error uploading cabin
  if (storageError) {
    const {error} = await supabase.from("cabins").delete().eq("id", data.id);

    if (error) {
      console.error(error);
      throw new Error("Cabin could not be deleted.");
    }
  }

  return data;
}

export async function deleteCabin(id) {
  const {data, error} = await supabase.from("cabins").delete().eq("id", id);

  if (error) {
    console.error(error);
    throw new Error("Cabin could not be deleted.");
  }

  return data;
}
