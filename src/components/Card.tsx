type CardProps = {
  name: string;
  description: string;
  imageUrl: string;
  color: string;
};

export const Card = ({ name, description, imageUrl, color }: CardProps) => {
  return (
    <li
      style={{
        backgroundColor: color,
      }}
      className='flex w-64 flex-col items-center justify-center rounded border p-4 shadow-md'>
      <img className='h-64' src={imageUrl} alt={name} />
      <h3 className='text-3xl'>{name}</h3>
      <p className='text-xl'>{description}</p>
    </li>
  );
};
