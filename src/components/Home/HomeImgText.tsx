import { useTranslation } from 'react-i18next';
import Picture from '../../assets/profile.jpeg';

export const HomeImgText = () => {
  const { t } = useTranslation();

  return (
    <div className="home__imagetext">
      <picture className="imagetext__picture">
        <img loading="lazy" src={Picture} alt="Portrait of Johan " />
      </picture>
      <div className="home__titles">
        <h1 className="titles__title">{t('IAM')}</h1>
        <div className="titles__subtitle">
          <p>#</p>
          <p className="subtitle__subtitles">
            <span className="subtitles__span">Software Engineer</span>
            <span className="subtitles__span">Back-end developer</span>
            <span className="subtitles__span">Mern Stack</span>
            <span className="subtitles__span">Agent of Support</span>
          </p>
        </div>
      </div>
    </div>
  );
};
