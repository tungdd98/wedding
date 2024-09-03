'use client'

import { FC, useMemo, useState } from 'react'
import Image from 'next/image'
import { cn } from '@/utils/helpers'

const IMAGES = {
	BOY: '/images/boy.jpg',
	GIRL: '/images/girl.jpg',
} as const

const Home: FC = () => {
	const [src, setSrc] = useState<string>(IMAGES.BOY)
	const [name, setName] = useState('Chang e dun')
	const [hour, setHour] = useState('10')
	const [minute, setMinute] = useState('30')

	const {
		positionHourRight,
		positionMinuteRight,
		positionHourLeft,
		positionMinuteLeft,
	} = useMemo(() => {
		if (src === IMAGES.BOY) {
			return {
				positionHourRight:
					'top-[363px] right-[350px] w-full text-right',
				positionMinuteRight:
					'top-[363px] right-[265px] w-full text-right',
				positionHourLeft: 'top-[525px] left-[185px] w-1/2',
				positionMinuteLeft: 'top-[525px] left-[250px] w-1/2',
			}
		}

		return {
			positionHourRight: 'top-[525px] left-[185px] w-1/2',
			positionMinuteRight: 'top-[525px] left-[250px] w-1/2',
			positionHourLeft: 'top-[363px] right-[340px] w-full text-right',
			positionMinuteLeft: 'top-[363px] right-[255px] w-full text-right',
		}
	}, [src])

	const handleChangeSrc = (image: string) => {
		setSrc(image)
	}

	return (
		<div className='relative'>
			<div className='flex justify-center items-center ml-[312px] min-h-screen'>
				<div className='relative px-4'>
					<Image
						src={src}
						width={1479 * 0.8}
						height={1134 * 0.8}
						alt=''
						className='max-w-full'
					/>
					<div className='absolute z-10 top-[173px] left-0 w-1/2 text-lg text-center font-medium'>
						{name}
					</div>
					<div
						className={cn(
							'absolute z-10 text-lg font-medium',
							positionHourRight
						)}>
						{hour}
					</div>
					<div
						className={cn(
							'absolute z-10 text-lg font-medium',
							positionMinuteRight
						)}>
						{minute}
					</div>
					<div
						className={cn(
							'absolute z-10 text-lg font-medium',
							positionHourLeft
						)}>
						{hour}
					</div>
					<div
						className={cn(
							'absolute z-10 text-lg font-medium',
							positionMinuteLeft
						)}>
						{minute}
					</div>
				</div>
			</div>
			<div className='fixed bg-gray-100 shadow-md top-0 bottom-0 left-0 w-[312px] p-4'>
				<button
					type='button'
					onClick={() => handleChangeSrc(IMAGES.BOY)}
					className={cn(
						'text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-4 w-full transition-all',
						src === IMAGES.BOY && 'ring-4'
					)}>
					Thiệp nhà trai
				</button>
				<button
					type='button'
					onClick={() => handleChangeSrc(IMAGES.GIRL)}
					className={cn(
						'text-white bg-gradient-to-r from-purple-500 to-pink-500 hover:bg-gradient-to-l focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-10 w-full transition-all',
						src === IMAGES.GIRL && 'ring-4'
					)}>
					Thiệp nhà gái
				</button>
				<form onSubmit={(e) => e.preventDefault()}>
					<div className='mb-2'>
						<label
							htmlFor='first_name'
							className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'>
							Tên khách mời
						</label>
						<div className='relative'>
							<input
								type='text'
								id='first_name'
								className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 pr-7'
								placeholder='Tên khách mời'
								required
								value={name}
								onChange={(e) => setName(e.target.value)}
							/>
							{name && (
								<div
									className='absolute cursor-pointer right-3 top-1/2 -translate-y-1/2'
									onClick={() => setName('')}>
									&times;
								</div>
							)}
						</div>
					</div>
					<div className='grid grid-cols-2 gap-2'>
						<div>
							<label
								htmlFor='hour'
								className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'>
								Giờ
							</label>
							<input
								type='text'
								id='hour'
								className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
								required
								value={hour}
								onChange={(e) => setHour(e.target.value)}
							/>
						</div>
						<div>
							<label
								htmlFor='minute'
								className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'>
								Phút
							</label>
							<input
								type='text'
								id='hour'
								className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
								required
								value={minute}
								onChange={(e) => setMinute(e.target.value)}
							/>
						</div>
					</div>
				</form>
			</div>
		</div>
	)
}

export default Home
