import avatar from '../assets/me.jpg';
export const Avatar = ({ active }) => {
  return (
    <div className="">
      <div className='w-full'>
        <img className="w-full  aspect-square object-cover "
          src={avatar}
          alt="avatar"
          style={active ? {
            opacity: 1,
          } : {opacity: 0.3}} />
      </div>
      <h2 className='px-8 py-4 text-4xl text-left font-semibold'>Aleksandr Dubovik</h2>
    </div>
  )
}