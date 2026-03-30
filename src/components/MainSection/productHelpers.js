import {
  FaBolt,
  FaBoxes,
  FaChartLine,
  FaCogs,
  FaFeatherAlt,
  FaFileInvoice,
  FaPenNib,
  FaUserCircle,
} from 'react-icons/fa'

export const iconMap = {
  writing: FaPenNib,
  design: FaFeatherAlt,
  stock: FaBoxes,
  automation: FaCogs,
  resume: FaUserCircle,
  social: FaBolt,
  proposal: FaFileInvoice,
  analytics: FaChartLine,
}

export const priceText = (price, period) =>
  `$${price}${period === 'one-time' ? '' : `/${period}`}`
