import CategoryIcon from '@mui/icons-material/Category';
import MedicationIcon from '@mui/icons-material/Medication';
import DocumentScannerIcon from '@mui/icons-material/DocumentScanner';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';

export const sidebarLinks = [
    {type: 'link', text: 'Kategoriyalar', href: '/categories', icon: <CategoryIcon />},
    {type: 'link', text: 'Dorilar', href: '/medicines', icon: <MedicationIcon />},
    {type: 'link', text: 'Buyurtmalar', href: '/orders', icon: <DocumentScannerIcon/>},
    {type: 'link', text: 'Dostavkalar', href: '/deliveries', icon: <LocalShippingIcon />},
]