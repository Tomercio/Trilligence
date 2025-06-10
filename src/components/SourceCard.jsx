// src/components/SourceCard.jsx
import React from 'react';
import * as Popover from '@radix-ui/react-popover';
import {
  HiOutlineLink,
  HiOutlineGlobeAlt,
  HiOutlineLockOpen,
  HiOutlineShieldCheck,
  HiOutlineExternalLink,
  HiOutlineGlobe,
  HiOutlineInformationCircle,
} from 'react-icons/hi';
import { BiBug } from 'react-icons/bi';
import { GiFishingHook } from 'react-icons/gi';
import { FiFilter } from 'react-icons/fi';

// Category → fallback icon mapping with colors
const categoryIconMap = {
  "Asset Discovery": { icon: HiOutlineGlobeAlt, color: "text-blue-500", bgColor: "bg-blue-50 dark:bg-blue-900/20" },
  "Threat Intelligence": { icon: HiOutlineShieldCheck, color: "text-red-500", bgColor: "bg-red-50 dark:bg-red-900/20" },
  "Community TI": { icon: HiOutlineShieldCheck, color: "text-orange-500", bgColor: "bg-orange-50 dark:bg-orange-900/20" },
  "Analysis": { icon: HiOutlineGlobe, color: "text-purple-500", bgColor: "bg-purple-50 dark:bg-purple-900/20" },
  "Platform": { icon: HiOutlineGlobe, color: "text-indigo-500", bgColor: "bg-indigo-50 dark:bg-indigo-900/20" },
  "Reputation": { icon: HiOutlineShieldCheck, color: "text-green-500", bgColor: "bg-green-50 dark:bg-green-900/20" },
  "Malware": { icon: BiBug, color: "text-red-600", bgColor: "bg-red-50 dark:bg-red-900/20" },
  "Breach Data": { icon: HiOutlineLockOpen, color: "text-yellow-600", bgColor: "bg-yellow-50 dark:bg-yellow-900/20" },
  "Phishing": { icon: GiFishingHook, color: "text-orange-600", bgColor: "bg-orange-50 dark:bg-orange-900/20" },
  "Blocklist": { icon: HiOutlineShieldCheck, color: "text-red-500", bgColor: "bg-red-50 dark:bg-red-900/20" },
  "Noise Filtering": { icon: FiFilter, color: "text-gray-500", bgColor: "bg-gray-50 dark:bg-gray-900/20" },
  "WiFi Recon": { icon: HiOutlineGlobeAlt, color: "text-cyan-500", bgColor: "bg-cyan-50 dark:bg-cyan-900/20" },
  "Code Search": { icon: HiOutlineGlobe, color: "text-emerald-500", bgColor: "bg-emerald-50 dark:bg-emerald-900/20" },
  "Email Enrichment": { icon: HiOutlineGlobe, color: "text-teal-500", bgColor: "bg-teal-50 dark:bg-teal-900/20" },
  "OSINT": { icon: HiOutlineGlobe, color: "text-violet-500", bgColor: "bg-violet-50 dark:bg-violet-900/20" },
  "Attack Surface": { icon: HiOutlineShieldCheck, color: "text-rose-500", bgColor: "bg-rose-50 dark:bg-rose-900/20" },
  "Certificate Search": { icon: HiOutlineLockOpen, color: "text-amber-500", bgColor: "bg-amber-50 dark:bg-amber-900/20" },
  "Vulnerability": { icon: HiOutlineShieldCheck, color: "text-red-600", bgColor: "bg-red-50 dark:bg-red-900/20" },
};

export default function SourceCard({ source }) {
  const categoryConfig = categoryIconMap[source.category] || { 
    icon: HiOutlineLink, 
    color: "text-gray-500", 
    bgColor: "bg-gray-50 dark:bg-gray-900/20" 
  };
  const CategoryIcon = categoryConfig.icon;

  // Render logo using unavatar.io, fallback to icon if error
  const [imgError, setImgError] = React.useState(false);
  const logoUrl = `https://unavatar.io/${new URL(source.url).hostname}`;
  const renderLogo = () => {
    if (!imgError) {
      return (
        <img
          src={logoUrl}
          alt={`${source.name} logo`}
          className="w-8 h-8 object-contain rounded"
          onError={() => setImgError(true)}
        />
      );
    }
    // fallback icon
    return (
      <CategoryIcon className={`w-8 h-8 ${categoryConfig.color}`} />
    );
  };

  // Badge component
  const Badge = ({ children, className }) => (
    <span className={
      "inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium " + className
    }>
      {children}
    </span>
  );

  return (
    <div className="group bg-white dark:bg-gray-800 rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-200/50 dark:border-gray-700/50 hover:border-purple-200 dark:hover:border-green-800/50 hover:-translate-y-1 backdrop-blur-sm">
      <div className="p-4">
        {/* Header Section */}
        <div className="flex items-start justify-between mb-3">
          <div className="flex items-center space-x-3 flex-1 min-w-0">
            {/* Icon Container */}
            <div className={`relative w-10 h-10 flex-shrink-0 rounded-lg ${categoryConfig.bgColor} flex items-center justify-center group-hover:scale-110 transition-all duration-300`}>
              {renderLogo()}
            </div>
            
            {/* Title and Category */}
            <div className="flex-1 min-w-0">
              <h3 className="text-base font-bold text-gray-900 dark:text-gray-100 truncate group-hover:text-green-600 dark:group-hover:text-green-400 transition-colors">
                {source.name}
              </h3>
              {source.category && (
                <Badge className={`mt-0.5 ${categoryConfig.bgColor} ${categoryConfig.color} border border-current/20`}>
                  {source.category}
                </Badge>
              )}
            </div>
          </div>
          
          {/* Quick Actions */}
          <div className="flex items-center space-x-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <Popover.Root>
              <Popover.Trigger asChild>
                <button className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors">
                  <HiOutlineInformationCircle className="w-5 h-5 text-gray-500 dark:text-gray-400" />
                </button>
              </Popover.Trigger>
              <Popover.Portal>
                <Popover.Content
                  className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-2xl w-96 z-50 border border-gray-200 dark:border-gray-700"
                  sideOffset={8}
                >
                  <div className="space-y-4">
                    {/* Header */}
                    <div className="flex items-center space-x-3 pb-3 border-b border-gray-200 dark:border-gray-700">
                      <div className={`w-10 h-10 rounded-xl ${categoryConfig.bgColor} flex items-center justify-center`}>
                        {renderLogo()}
                      </div>
                      <div>
                        <h4 className="font-bold text-gray-900 dark:text-gray-100">{source.name}</h4>
                        <p className="text-sm text-gray-500 dark:text-gray-400">{source.category}</p>
                      </div>
                    </div>
                    
                    {/* Description */}
                    <div>
                      <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
                        {source.description}
                      </p>
                    </div>
                    
                    {/* Details Grid */}
                    <div className="grid grid-cols-1 gap-3 text-sm">
                      <div className="flex items-center space-x-3 p-2 rounded-lg bg-gray-50 dark:bg-gray-700/50">
                        <HiOutlineGlobe className="w-4 h-4 text-blue-500 flex-shrink-0" />
                        <a
                          href={source.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-blue-600 dark:text-blue-400 hover:underline truncate"
                        >
                          {new URL(source.url).hostname}
                        </a>
                      </div>
                      
                      {source.apiDoc && (
                        <div className="flex items-center space-x-3 p-2 rounded-lg bg-gray-50 dark:bg-gray-700/50">
                          <HiOutlineExternalLink className="w-4 h-4 text-green-500 flex-shrink-0" />
                          <a
                            href={source.apiDoc}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-green-600 dark:text-green-400 hover:underline"
                          >
                            API Documentation
                          </a>
                        </div>
                      )}
                      
                      {source.pricing && (
                        <div className="flex items-center space-x-3 p-2 rounded-lg bg-gray-50 dark:bg-gray-700/50">
                          <HiOutlineLockOpen className="w-4 h-4 text-amber-500 flex-shrink-0" />
                          <span className="text-gray-700 dark:text-gray-300">
                            {source.pricing}
                          </span>
                        </div>
                      )}
                      
                      {source.tags && source.tags.length > 0 && (
                        <div className="space-y-2">
                          <div className="flex items-center space-x-2">
                            <HiOutlineShieldCheck className="w-4 h-4 text-purple-500" />
                            <span className="text-gray-700 dark:text-gray-300 font-medium">Tags</span>
                          </div>
                          <div className="flex flex-wrap gap-1">
                            {source.tags.map(tag => (
                              <span 
                                key={tag} 
                                className="bg-purple-100 dark:bg-purple-900/30 text-purple-800 dark:text-purple-300 text-xs px-2 py-1 rounded-full border border-purple-200 dark:border-purple-800"
                              >
                                {tag}
                              </span>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                  <Popover.Arrow className="fill-white dark:fill-gray-800" />
                </Popover.Content>
              </Popover.Portal>
            </Popover.Root>
          </div>
        </div>

        {/* Description */}
        {source.shortDescription && (
          <div className="mb-3">
            <p className="text-xs text-gray-600 dark:text-gray-400 line-clamp-2 leading-relaxed">
              {source.shortDescription}
            </p>
          </div>
        )}

        {/* Pricing Badge */}
        {source.pricing && (
          <div className="mb-3">
            <Badge className="bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 text-green-700 dark:text-green-300 border border-green-200 dark:border-green-800">
              {source.pricing}
            </Badge>
          </div>
        )}

        {/* Tags */}
        {source.tags && source.tags.length > 0 && (
          <div className="mb-3">
            <div className="flex flex-wrap gap-1">
              {source.tags.slice(0, 2).map(tag => (
                <span 
                  key={tag} 
                  className="bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 text-xs px-2 py-0.5 rounded-md"
                >
                  {tag}
                </span>
              ))}
              {source.tags.length > 2 && (
                <span className="text-xs text-gray-500 dark:text-gray-400 px-2 py-0.5">
                  +{source.tags.length - 2} more
                </span>
              )}
            </div>
          </div>
        )}

        {/* Action Button */}
        <div className="pt-2 border-t border-gray-100 dark:border-gray-700 flex justify-center">
          <a
            href={source.url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-purple-500 to-purple-700 hover:from-purple-600 hover:to-purple-800 text-white text-sm font-semibold rounded-lg transition-all duration-300 shadow-sm group"
          >
            <span>Visit Platform</span>
            <HiOutlineExternalLink className="w-4 h-4 ml-2 group-hover:translate-x-0.5 transition-transform" />
          </a>
        </div>
      </div>
    </div>
  );
}