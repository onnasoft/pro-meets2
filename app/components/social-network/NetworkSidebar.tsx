import React from 'react';
import { Search, Building2, Plus, X } from 'lucide-react';
import { User } from '@onnasoft/pro-meets-core';
import { getAvatarUrl } from '~/utils/gravatar';

interface NetworkSidebarProps {
  companies: User[];
  searchTerm: string;
  onSearchChange: (term: string) => void;
  onFollowCompany: (company: User) => void;
  onClose?: () => void;
  className?: string;
}

export const NetworkSidebar: React.FC<NetworkSidebarProps> = ({
  companies,
  searchTerm,
  onSearchChange,
  onFollowCompany,
  onClose,
  className = ''
}) => {
  const filteredCompanies = companies.filter(company =>
    company.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    company.email.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className='flex flex-col p-4'>
      <div className={`bg-white rounded-xl shadow-lg border border-gray-200 flex-[.5] sticky top-20 ${className}`}>
        {/* Header de la card */}
        <div className="p-4 border-b border-gray-200 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Building2 className="w-5 h-5 text-primary-600" />
            <h2 className="font-semibold text-gray-900">Companies to Follow</h2>
          </div>
          {onClose && (
            <button
              onClick={onClose}
              className="p-1 hover:bg-gray-100 rounded-lg transition-colors"
            >
              <X className="w-4 h-4 text-gray-500" />
            </button>
          )}
        </div>

        {/* Barra de búsqueda */}
        <div className="p-4 border-b border-gray-200">
          <div className="relative">
            <Search className="w-4 h-4 text-gray-400 absolute left-3 top-1/2 transform -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search companies..."
              value={searchTerm}
              onChange={(e) => onSearchChange(e.target.value)}
              className="w-full pl-9 pr-3 py-2 bg-gray-100 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary-500"
            />
          </div>
        </div>

        {/* Lista de empresas - con scroll limitado */}
        <div className="max-h-80 overflow-y-auto">
          {filteredCompanies.length > 0 ? (
            <div className="p-4 space-y-3">
              {filteredCompanies.slice(0, 5).map((company) => (
                <div
                  key={company.id}
                  className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-50 transition-colors"
                >
                  <img
                    src={getAvatarUrl(company)}
                    alt={company.name}
                    className="w-10 h-10 rounded-full flex-shrink-0"
                  />
                  <div className="flex-1 min-w-0">
                    <h4 className="font-medium text-gray-900 text-sm truncate">{company.name}</h4>
                    <p className="text-xs text-gray-500 truncate">@{company.email.split('@')[0]}</p>
                  </div>
                  <button
                    onClick={() => onFollowCompany(company)}
                    className="bg-primary-600 text-white p-2 rounded-lg hover:bg-primary-700 transition-colors flex-shrink-0"
                    title="Follow company"
                  >
                    <Plus className="w-4 h-4" />
                  </button>
                </div>
              ))}

              {filteredCompanies.length > 5 && (
                <div className="text-center pt-2">
                  <p className="text-xs text-gray-500">
                    +{filteredCompanies.length - 5} more companies
                  </p>
                </div>
              )}
            </div>
          ) : (
            <div className="p-8 text-center text-gray-500">
              <Building2 className="w-8 h-8 mx-auto mb-2 opacity-50" />
              <p className="text-sm">No companies found</p>
            </div>
          )}
        </div>

        {/* Footer opcional */}
        {filteredCompanies.length > 0 && (
          <div className="p-3 border-t border-gray-200 bg-gray-50">
            <p className="text-xs text-gray-600 text-center">
              Discover amazing companies to follow
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

// Versión alternativa como card flotante
interface FloatingCompaniesCardProps extends Omit<NetworkSidebarProps, 'className'> {
  isOpen: boolean;
  onClose: () => void;
  position?: 'top-right' | 'top-left' | 'bottom-right' | 'bottom-left';
}

export const FloatingCompaniesCard: React.FC<FloatingCompaniesCardProps> = ({
  isOpen,
  onClose,
  position = 'top-right',
  ...props
}) => {
  if (!isOpen) return null;

  const positionClasses = {
    'top-right': 'top-4 right-4',
    'top-left': 'top-4 left-4',
    'bottom-right': 'bottom-4 right-4',
    'bottom-left': 'bottom-4 left-4'
  };

  return (
    <div className={`fixed ${positionClasses[position]} p-4 z-50`}>
      <NetworkSidebar
        {...props}
        onClose={onClose}
        className="w-80 shadow-xl"
      />
    </div>
  );
};