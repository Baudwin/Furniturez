import { FiArrowRight } from "react-icons/fi"
import { Link } from "react-router-dom"

export const ShopNow = () => {
  return (
    <div className="flex w-fit items-center gap-1 border-b border-black">
        <Link to={'/shop'} className="text-sm">Shop Now</Link>
        <FiArrowRight/>
    </div>
  )
}
