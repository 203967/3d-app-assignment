import { reactive } from "vue";
import axios from "axios";

export const store = reactive({})

async function getImgList () {
  let { data } = await axios.get("scripts/php/hook.php")
  if (import.meta.env.MODE === "development") {
    data = '/coke_can_tn.png~/sprite_top_tn.png~/coke_top_tn.png~/dr_pepper_top_tn.png'
  }
  data = data.split("~");
  store.imgList = data
}
getImgList()