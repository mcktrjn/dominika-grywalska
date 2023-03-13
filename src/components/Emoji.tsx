type Props = {
  src: string;
  alt: string;
};

export const Emoji: React.FC<Props> = ({ src, alt }) => {
  return <img src={src} alt={alt} width={20} height={20} />;
};
