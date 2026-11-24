import DashboardLayout from '../layouts/DashboardLayout';

const Bone = ({ className = '' }) => <div className={`rounded-md bg-raised animate-pulse ${className}`} />;
const Card = ({ className = '', children }) => (
  <div className={`bg-surface border border-default rounded-lg p-lg flex flex-col gap-md ${className}`}>{children}</div>
);

// A2.4 Overview – Loading (same layout as Overview, grey blocks instead of content)
export default function OverviewLoading() {
  return (
    <DashboardLayout title="Overview">
      <div className="grid grid-cols-4 gap-md">
        {[0, 1, 2, 3].map((i) => <Card key={i} className="!gap-xs"><Bone className="h-[12px] w-[40%]" /><Bone className="h-[40px] w-[30%]" /><Bone className="h-[14px] w-[60%]" /></Card>)}
      </div>
      <div className="flex gap-md items-start">
        <Card className="flex-[712]"><Bone className="h-[20px] w-[40%]" /><Bone className="h-[216px]" /></Card>
        <Card className="flex-[400]"><Bone className="h-[20px] w-[50%]" />{[0, 1, 2, 3].map((i) => <Bone key={i} className="h-[100px]" />)}</Card>
      </div>
      <Card><Bone className="h-[20px] w-[30%]" /><Bone className="h-[44px]" /><Bone className="h-[56px]" /><Bone className="h-[56px]" /></Card>
    </DashboardLayout>
  );
}
