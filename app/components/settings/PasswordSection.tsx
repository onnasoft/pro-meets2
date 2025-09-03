import { Lock, Eye, EyeOff, KeyRound } from "lucide-react";
import { useState } from "react";
import translations from "./translations";

interface PasswordSectionProps {
  readonly translations: typeof translations.en.password;
  readonly onPasswordUpdate: (currentPassword: string, newPassword: string) => Promise<boolean>;
}

export function PasswordSection({
  translations,
  onPasswordUpdate,
}: PasswordSectionProps) {
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showCurrentPassword, setShowCurrentPassword] = useState(false);
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [isUpdating, setIsUpdating] = useState(false);
  const [message, setMessage] = useState<{ type: "success" | "error"; text: string } | null>(null);

  // Calcular fortaleza de la contraseña
  const calculatePasswordStrength = (password: string) => {
    if (password.length === 0) return { strength: 0, label: "" };
    
    let strength = 0;
    if (password.length >= 8) strength += 1;
    if (/[A-Z]/.test(password)) strength += 1;
    if (/\d/.test(password)) strength += 1;
    if (/[^A-Za-z0-9]/.test(password)) strength += 1;
    
    let label = "";
    if (strength <= 1) label = translations.strength.weak;
    else if (strength <= 3) label = translations.strength.medium;
    else label = translations.strength.strong;
    
    return { strength, label };
  };

  const passwordStrength = calculatePasswordStrength(newPassword);
  const passwordsMatch = newPassword === confirmPassword;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (newPassword !== confirmPassword) {
      setMessage({ type: "error", text: "Las contraseñas no coinciden" });
      return;
    }
    
    setIsUpdating(true);
    setMessage(null);
    
    try {
      const success = await onPasswordUpdate(currentPassword, newPassword);
      if (success) {
        setMessage({ type: "success", text: translations.successMessage });
        setCurrentPassword("");
        setNewPassword("");
        setConfirmPassword("");
      } else {
        setMessage({ type: "error", text: translations.errorMessage });
      }
    } catch (error) {
      console.error("Password update failed:", error);
      setMessage({ type: "error", text: translations.errorMessage });
    } finally {
      setIsUpdating(false);
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-xs border border-gray-200 p-6">
      <div className="flex items-center mb-6">
        <Lock className="h-5 w-5 text-primary-600 mr-2" />
        <h2 className="text-xl font-semibold">{translations.title}</h2>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Mensaje de estado */}
        {message && (
          <div className={`p-3 rounded-md ${message.type === "success" ? "bg-green-50 text-green-700" : "bg-red-50 text-red-700"}`}>
            {message.text}
          </div>
        )}

        {/* Contraseña actual */}
        <div className="space-y-2">
          <label htmlFor="currentPassword" className="font-medium text-gray-700">
            {translations.currentPassword.label}
          </label>
          <div className="relative">
            <input
              id="currentPassword"
              type={showCurrentPassword ? "text" : "password"}
              value={currentPassword}
              onChange={(e) => setCurrentPassword(e.target.value)}
              placeholder={translations.currentPassword.placeholder}
              className="w-full p-3 border border-gray-300 rounded-lg pr-10"
              required
            />
            <button
              type="button"
              onClick={() => setShowCurrentPassword(!showCurrentPassword)}
              className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-500 hover:text-gray-700"
            >
              {showCurrentPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
            </button>
          </div>
        </div>

        {/* Nueva contraseña */}
        <div className="space-y-2">
          <label htmlFor="newPassword" className="font-medium text-gray-700">
            {translations.newPassword.label}
          </label>
          <div className="relative">
            <input
              id="newPassword"
              type={showNewPassword ? "text" : "password"}
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
              placeholder={translations.newPassword.placeholder}
              className="w-full p-3 border border-gray-300 rounded-lg pr-10"
              required
            />
            <button
              type="button"
              onClick={() => setShowNewPassword(!showNewPassword)}
              className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-500 hover:text-gray-700"
            >
              {showNewPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
            </button>
          </div>
          
          {/* Indicador de fortaleza de contraseña */}
          {newPassword && (
            <div className="mt-2">
              <div className="flex items-center text-sm text-gray-500 mb-1">
                <KeyRound className="h-4 w-4 mr-1" />
                <span>Fortaleza: {passwordStrength.label}</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                {(() => {
                  let strengthClass = "";
                  if (passwordStrength.strength <= 1) {
                    strengthClass = "bg-red-500";
                  } else if (passwordStrength.strength <= 3) {
                    strengthClass = "bg-yellow-500";
                  } else {
                    strengthClass = "bg-green-500";
                  }
                  return (
                    <div
                      className={`h-2 rounded-full ${strengthClass}`}
                      style={{ width: `${(passwordStrength.strength / 4) * 100}%` }}
                    ></div>
                  );
                })()}
              </div>
            </div>
          )}
          
          <p className="text-sm text-gray-500">{translations.newPassword.requirements}</p>
        </div>

        {/* Confirmar contraseña */}
        <div className="space-y-2">
          <label htmlFor="confirmPassword" className="font-medium text-gray-700">
            {translations.confirmPassword.label}
          </label>
          <div className="relative">
            {(() => {
              let confirmPasswordBorderClass = "border-gray-300";
              if (confirmPassword) {
                confirmPasswordBorderClass = passwordsMatch ? "border-green-500" : "border-red-500";
              }
              return (
                <input
                  id="confirmPassword"
                  type={showConfirmPassword ? "text" : "password"}
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  placeholder={translations.confirmPassword.placeholder}
                  className={`w-full p-3 border rounded-lg pr-10 ${confirmPasswordBorderClass}`}
                  required
                />
              );
            })()}
            <button
              type="button"
              onClick={() => setShowConfirmPassword(!showConfirmPassword)}
              className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-500 hover:text-gray-700"
            >
              {showConfirmPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
            </button>
          </div>
          {confirmPassword && !passwordsMatch && (
            <p className="text-sm text-red-500">Las contraseñas no coinciden</p>
          )}
        </div>

        {/* Botón de actualización */}
        <button
          type="submit"
          disabled={isUpdating || !currentPassword || !newPassword || !confirmPassword || !passwordsMatch}
          className="w-full bg-primary-600 text-white py-3 px-4 rounded-lg font-medium hover:bg-primary-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
        >
          {isUpdating ? "Actualizando..." : translations.updateButton}
        </button>
      </form>
    </div>
  );
}