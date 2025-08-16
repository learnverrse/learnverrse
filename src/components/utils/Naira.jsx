function Naira({ amount, className = '' }) {
  const formatter = new Intl.NumberFormat('en-NG', {
    style: 'currency',
    currency: 'NGN',
    minimumFractionDigits: 2,
  });

  return <span className={className}>{formatter.format(amount || 0)}</span>;
}

export default Naira;
