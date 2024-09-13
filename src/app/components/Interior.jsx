import Image from 'next/image'

const rooms = [
  { name: 'BALCONY', image: '/about/interior1.jpg' },
  { name: 'BED ROOM', image: '/about/interior2.jpg' },
  { name: 'LIVING ROOM', image: '/about/interior3.jpg' },
  { name: 'BATH ROOM', image: '/about/interior4.jpg' },
]

export default function Interior() {
  return (
    <div className="custom-container text-white p-8">
      <h1 className="text-4xl font-bold text-center mb-8">Interior Designing</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {rooms.map((room) => (
          <div key={room.name} className="relative">
            <Image
              src={room.image}
              alt={room.name}
              width={300}
              height={200}
              className="w-full h-48 object-cover"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 p-2">
              <p className="text-center font-semibold">{room.name}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}