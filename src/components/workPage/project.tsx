/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react';
import classNames from 'classnames';

interface IProps {
  name: string;
  type: string;
  slogan: string;
  introduction: string;
  link: string | null;
  img: string;
  partners: string[];
}

const Project: React.FC<IProps> = ({
  name,
  type,
  slogan,
  introduction,
  link,
  img,
  partners,
}) => (
  <div className={classNames('workpage-project-container')}>
    <div className={classNames('workpage-project-category')}>
      Project on {type}
    </div>
    <div className={classNames('workpage-project')}>
      <div className={classNames('workpage-project-card-left-container')}>
        <div className={classNames('workpage-project-text-header')}>
          <img
            className={classNames('workpage-project-card-left-img')}
            alt={type}
            src={`${process.env.PUBLIC_URL}/workPage/icons/${type}.svg`}
          />
          <div className={classNames('workpage-project-text-header-right')}>
            <div
              className={classNames(
                'workpage-project-text-header-right-slogan',
              )}
            >
              {slogan}
            </div>
            <div
              className={classNames('workpage-project-text-header-right-name')}
            >
              {name}
              {/* {link && (
                <a href={link}>
                  <img
                    alt="fb"
                    src={`${process.env.PUBLIC_URL}/workPage/website.png`}
                  />
                </a>
              )} */}
            </div>
          </div>
        </div>
        <p>{introduction}</p>
        <div className={classNames('workpage-project-text-footer')}>
          {partners.map((d) => (
            <img
              alt={d}
              src={`${process.env.PUBLIC_URL}/workPage/partners/${d}`}
            />
          ))}
        </div>
      </div>
      <div className={classNames('workpage-project-card-right-container')}>
        {link && (
          <a
            className={classNames('workpage-project-card-right-link')}
            href={link}
          >
            <img
              className={classNames('workpage-project-card-right-link-img')}
              alt="fb"
              src={`${process.env.PUBLIC_URL}/workPage/website.png`}
            />
          </a>
        )}
        <img
          className={classNames('workpage-project-card-img')}
          alt={img}
          src={`${process.env.PUBLIC_URL}/workPage/pics/${img}.png`}
        />
      </div>
    </div>
  </div>
);

export default Project;
