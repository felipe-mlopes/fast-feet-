export function zipcodeMask(value: string): string {
    const numericValue = value.replace(/\D/g, '');
    
    const maskedValue = numericValue.replace(/(\d{5})(\d{3})/, '$1-$2')
    
    return maskedValue
  }