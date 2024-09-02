import Image from 'next/image'
import RBC from '@/public/banks/rbc-shield.svg';
import TD from '@/public/banks/td-canada-trust-1.svg';
import ScotiaBank from '@/public/banks/scotiabank-4.svg';
import BMO from '@/public/banks/BMO_Logo.svg';
import CIBC from '@/public/banks/cibc-1.svg';
import NationalBank from '@/public/banks/National_Bank_of_Canada-Logo.wine.svg';
import DefaultBankLogo from '@/public/banks/default_bank.svg';

const LogoSrcMap = {
  "RBC": RBC,
  "TD Bank": TD,
  "Scotia Bank": ScotiaBank,
  "BMO": BMO,
  "CIBC": CIBC,
  "National Bank": NationalBank
} as const;

type PredefinedBankName = keyof typeof LogoSrcMap;

interface BankLogoProps {
  bankName: string;
}

const BankLogo: React.FC<BankLogoProps> = ({bankName}) => {
  const logoSrc = bankName in LogoSrcMap
    ? LogoSrcMap[bankName as PredefinedBankName]
    : DefaultBankLogo;

  return (
    <Image 
      src={logoSrc} 
      alt={`${bankName} logo`} 
      width={50} 
      height={50}
    />
  );
}

export default BankLogo