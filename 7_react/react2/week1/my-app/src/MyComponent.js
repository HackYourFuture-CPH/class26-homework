import PageText from './PageText';

export default function PageContainer() {
  return (
    <div className="page-container">
      <PageHeader title={PaymentResponse.title} />
      {PaymentResponse.children}
    </div>
  );
}
