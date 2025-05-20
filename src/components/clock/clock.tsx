export interface ClockProps {
  tick?: number;
}
// export function Clock({ tick = 0 }: ClockProps): React.ReactNode {
//   return (
//     <div className="border-2 border-gray-300 p-2 flex justify-items-center content-center max-w-fit">
//       <span>{tick}</span>
//     </div>
//   );
// }

export const Clock: React.FC<ClockProps> = ({ tick = 0 }: ClockProps) => {
  return (
    <div className="border-2 border-gray-300 p-2 flex justify-items-center content-center max-w-fit">
      <span>{tick}</span>
    </div>
  );
};
