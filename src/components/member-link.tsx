import { Coffee } from "lucide-react";
import Image from "next/image";

/* 

Component credit:
* Github: Overextended / overextended.github.io
* https://github.com/overextended/overextended.github.io/blob/main/components/MemberLink.tsx
* Authors: thelindat, lukewastakenn

*/

const MemberLink: React.FC<{ image: string; name: string; sponsor?: string }> = ({ image, name, sponsor }) => {
	return (
		<div key={name} className="flex flex-col items-center justify-center gap-2">
			<a href={`https://github.com/${name}`} target="_blank" className="flex flex-col items-center gap-2">
				<p className="text-sky-500 font-semibold">{name}</p>
				<Image src={image} width={200} height={200} alt={`${name}-image`} className="w-24 rounded-md bg-neutral-100 shadow-md dark:bg-neutral-900" />
			</a>
			<a href={sponsor ? `https://ko-fi.com/${sponsor}` : ''} target="_blank" className="w-full">
				<button disabled={!sponsor} className='flex w-full items-center justify-center gap-2 rounded-md p-2 text-sky-500 bg-sky-500/20 hover:bg-sky-500/30 disabled:text-slate-500 disabled:bg-slate-500/20'>
					<Coffee />
					Support
				</button>
			</a>
		</div>
	);
};

export default MemberLink;
