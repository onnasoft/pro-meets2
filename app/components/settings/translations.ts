const translations = {
  en: {
    title: "System Settings",
    subtitle: "Manage your notification preferences and connections",
    organizations: {
      title: "Organizations",
      noOrganizations: "You don't belong to any organization",
      create: "Create new organization",
      join: "Join organization",
      viewDetails: "View details",
      leave: "Leave organization",
      confirmDialog: {
        title: "Leave organization",
        message:
          "Are you sure you want to leave this organization? You won't have access to its resources anymore.",
        confirmText: "Leave",
        cancelText: "Stay",
      },
    },
    notifications: {
      title: "Notifications",
      email: {
        label: "Email Notifications",
        description: "Receive important notifications by email",
      },
      reminders: {
        label: "Meeting Reminders",
        description: "Alerts before each scheduled meeting",
      },
      summary: {
        label: "Weekly Summary",
        description: "Receive a weekly activity summary",
      },
    },
    apiKeys: {
      title: "API Keys",
      placeholder: "New API Key",
      add: "Add",
      noKeys: "No API keys registered",
      delete: "Delete",
    },
    webhooks: {
      title: "Webhooks",
      placeholder: "https://example.com/webhook",
      add: "Add",
      noWebhooks: "No webhooks configured",
      delete: "Delete",
    },
    password: {
      title: "Password",
      currentPassword: {
        label: "Current Password",
        placeholder: "Enter your current password",
      },
      newPassword: {
        label: "New Password",
        placeholder: "Enter your new password",
        requirements:
          "Must be at least 8 characters long and include a number.",
      },
      confirmPassword: {
        label: "Confirm Password",
        placeholder: "Re-enter your new password",
      },
      strength: {
        weak: "Weak",
        medium: "Medium",
        strong: "Strong",
      },
      updateButton: "Update Password",
      successMessage: "Password updated successfully.",
      errorMessage: "Failed to update password.",
    },
    language: {
      title: "Language",
      description: "Select your preferred language",
      languages: {
        en: { name: "English", nativeName: "English" },
        es: { name: "Spanish", nativeName: "Español" },
        fr: { name: "French", nativeName: "Français" },
        ja: { name: "Japanese", nativeName: "日本語" },
        zh: { name: "Chinese", nativeName: "中文" },
      },
      changeNote: "Changing your language will update the interface language.",
    },
  },
  es: {
    title: "Configuración del Sistema",
    subtitle: "Administra tus preferencias de notificaciones y conexiones",
    organizations: {
      title: "Organizaciones",
      noOrganizations: "No perteneces a ninguna organización",
      create: "Crear nueva organización",
      join: "Unirse a organización",
      viewDetails: "Ver detalles",
      leave: "Salir de la organización",
      confirmDialog: {
        title: "Salir de la organización",
        message:
          "¿Estás seguro de que deseas salir de esta organización? Ya no tendrás acceso a sus recursos.",
        confirmText: "Salir",
        cancelText: "Quedarse",
      },
    },
    notifications: {
      title: "Notificaciones",
      email: {
        label: "Notificaciones por Email",
        description: "Recibir notificaciones importantes por correo",
      },
      reminders: {
        label: "Recordatorios de reunión",
        description: "Alertas antes de cada reunión programada",
      },
      summary: {
        label: "Resumen semanal",
        description: "Recibir un resumen de actividad cada semana",
      },
    },
    apiKeys: {
      title: "API Keys",
      placeholder: "Nueva API Key",
      add: "Agregar",
      noKeys: "No hay API keys registradas",
      delete: "Eliminar",
    },
    webhooks: {
      title: "Webhooks",
      placeholder: "https://ejemplo.com/webhook",
      add: "Agregar",
      noWebhooks: "No hay webhooks configurados",
      delete: "Eliminar",
    },
    password: {
      title: "Contraseña",
      currentPassword: {
        label: "Contraseña actual",
        placeholder: "Introduce tu contraseña actual",
      },
      newPassword: {
        label: "Nueva contraseña",
        placeholder: "Introduce tu nueva contraseña",
        requirements: "Debe tener al menos 8 caracteres y incluir un número.",
      },
      confirmPassword: {
        label: "Confirmar contraseña",
        placeholder: "Vuelve a introducir tu nueva contraseña",
      },
      strength: {
        weak: "Débil",
        medium: "Medio",
        strong: "Fuerte",
      },
      updateButton: "Actualizar contraseña",
      successMessage: "Contraseña actualizada con éxito.",
      errorMessage: "Error al actualizar la contraseña.",
    },
    language: {
      title: "Idioma",
      description: "Selecciona tu idioma preferido",
      languages: {
        en: { name: "English", nativeName: "English" },
        es: { name: "Spanish", nativeName: "Español" },
        fr: { name: "French", nativeName: "Français" },
        ja: { name: "Japanese", nativeName: "日本語" },
        zh: { name: "Chinese", nativeName: "中文" },
      },
      changeNote: "Cambiar tu idioma actualizará el idioma de la interfaz.",
    },
  },
  fr: {
    title: "Paramètres du système",
    subtitle: "Gérez vos préférences de notification et connexions",
    organizations: {
      title: "Organisations",
      noOrganizations: "Vous n'appartenez à aucune organisation",
      create: "Créer une nouvelle organisation",
      join: "Rejoindre une organisation",
      viewDetails: "Voir les détails",
      leave: "Quitter l'organisation",
      confirmDialog: {
        title: "Quitter l'organisation",
        message:
          "Êtes-vous sûr de vouloir quitter cette organisation ? Vous n'aurez plus accès à ses ressources.",
        confirmText: "Quitter",
        cancelText: "Rester",
      },
    },
    notifications: {
      title: "Notifications",
      email: {
        label: "Notifications par email",
        description: "Recevoir des notifications importantes par email",
      },
      reminders: {
        label: "Rappels de réunion",
        description: "Alertes avant chaque réunion programmée",
      },
      summary: {
        label: "Résumé hebdomadaire",
        description: "Recevoir un résumé d'activité hebdomadaire",
      },
    },
    apiKeys: {
      title: "Clés API",
      placeholder: "Nouvelle clé API",
      add: "Ajouter",
      noKeys: "Aucune clé API enregistrée",
      delete: "Supprimer",
    },
    webhooks: {
      title: "Webhooks",
      placeholder: "https://exemple.com/webhook",
      add: "Ajouter",
      noWebhooks: "Aucun webhook configuré",
      delete: "Supprimer",
    },
    password: {
      title: "Mot de passe",
      currentPassword: {
        label: "Mot de passe actuel",
        placeholder: "Entrez votre mot de passe actuel",
      },
      newPassword: {
        label: "Nouveau mot de passe",
        placeholder: "Entrez votre nouveau mot de passe",
        requirements:
          "Doit comporter au moins 8 caractères et inclure un chiffre.",
      },
      confirmPassword: {
        label: "Confirmer le mot de passe",
        placeholder: "Ressaisissez votre nouveau mot de passe",
      },
      strength: {
        weak: "Faible",
        medium: "Moyen",
        strong: "Fort",
      },
      updateButton: "Mettre à jour le mot de passe",
      successMessage: "Mot de passe mis à jour avec succès.",
      errorMessage: "Échec de la mise à jour du mot de passe.",
    },
    language: {
      title: "Langue",
      description: "Sélectionnez votre langue préférée",
      languages: {
        en: { name: "English", nativeName: "English" },
        es: { name: "Spanish", nativeName: "Español" },
        fr: { name: "French", nativeName: "Français" },
        ja: { name: "Japanese", nativeName: "日本語" },
        zh: { name: "Chinese", nativeName: "中文" },
      },
      changeNote: "Changer votre langue mettra à jour la langue de l'interface.",
    },
  },
  jp: {
    title: "システム設定",
    subtitle: "通知設定と接続を管理",
    organizations: {
      title: "組織",
      noOrganizations: "所属している組織がありません",
      create: "新しい組織を作成",
      join: "組織に参加",
      viewDetails: "詳細を見る",
      leave: "組織を離れる",
      confirmDialog: {
        title: "組織を離れる",
        message:
          "この組織を離れてもよろしいですか？リソースへのアクセスができなくなります。",
        confirmText: "離れる",
        cancelText: "残る",
      },
    },
    notifications: {
      title: "通知",
      email: {
        label: "メール通知",
        description: "重要な通知をメールで受け取る",
      },
      reminders: {
        label: "会議リマインダー",
        description: "予定された会議前にアラート",
      },
      summary: {
        label: "週次サマリー",
        description: "週次の活動サマリーを受け取る",
      },
    },
    apiKeys: {
      title: "APIキー",
      placeholder: "新しいAPIキー",
      add: "追加",
      noKeys: "登録されているAPIキーがありません",
      delete: "削除",
    },
    webhooks: {
      title: "ウェブフック",
      placeholder: "https://example.com/webhook",
      add: "追加",
      noWebhooks: "設定されたウェブフックがありません",
      delete: "削除",
    },
    password: {
      title: "パスワード",
      currentPassword: {
        label: "現在のパスワード",
        placeholder: "現在のパスワードを入力してください",
      },
      newPassword: {
        label: "新しいパスワード",
        placeholder: "新しいパスワードを入力してください",
        requirements: "8文字以上で、数字を含める必要があります。",
      },
      confirmPassword: {
        label: "パスワードの確認",
        placeholder: "新しいパスワードを再入力してください",
      },
      strength: {
        weak: "弱い",
        medium: "普通",
        strong: "強い",
      },
      updateButton: "パスワードを更新",
      successMessage: "パスワードが正常に更新されました。",
      errorMessage: "パスワードの更新に失敗しました。",
    },
    language: {
      title: "言語",
      description: "お好みの言語を選択してください",
      languages: {
        en: { name: "English", nativeName: "English" },
        es: { name: "Spanish", nativeName: "Español" },
        fr: { name: "French", nativeName: "Français" },
        ja: { name: "Japanese", nativeName: "日本語" },
        zh: { name: "Chinese", nativeName: "中文" },
      },
      changeNote: "言語を変更すると、インターフェースの言語が更新されます。",
    },
  },
  zh: {
    title: "系统设置",
    subtitle: "管理通知偏好和连接",
    organizations: {
      title: "组织",
      noOrganizations: "您不属于任何组织",
      create: "创建新组织",
      join: "加入组织",
      viewDetails: "查看详情",
      leave: "离开组织",
      confirmDialog: {
        title: "离开组织",
        message: "您确定要离开此组织吗？您将无法访问其资源。",
        confirmText: "离开",
        cancelText: "留下",
      },
    },
    notifications: {
      title: "通知",
      email: {
        label: "电子邮件通知",
        description: "通过电子邮件接收重要通知",
      },
      reminders: {
        label: "会议提醒",
        description: "每次预定会议前的提醒",
      },
      summary: {
        label: "每周摘要",
        description: "接收每周活动摘要",
      },
    },
    apiKeys: {
      title: "API密钥",
      placeholder: "新的API密钥",
      add: "添加",
      noKeys: "没有注册的API密钥",
      delete: "删除",
    },
    webhooks: {
      title: "Webhooks",
      placeholder: "https://example.com/webhook",
      add: "添加",
      noWebhooks: "没有配置的webhooks",
      delete: "删除",
    },
    password: {
      title: "密码",
      currentPassword: {
        label: "当前密码",
        placeholder: "请输入您的当前密码",
      },
      newPassword: {
        label: "新密码",
        placeholder: "请输入您的新密码",
        requirements: "必须至少包含8个字符，并且包含数字。",
      },
      confirmPassword: {
        label: "确认密码",
        placeholder: "请重新输入您的新密码",
      },
      strength: {
        weak: "弱",
        medium: "中",
        strong: "强",
      },
      updateButton: "更新密码",
      successMessage: "密码更新成功。",
      errorMessage: "密码更新失败。",
    },
    language: {
      title: "语言",
      description: "选择您的首选语言",
      languages: {
        en: { name: "English", nativeName: "English" },
        es: { name: "Spanish", nativeName: "Español" },
        fr: { name: "French", nativeName: "Français" },
        ja: { name: "Japanese", nativeName: "日本語" },
        zh: { name: "Chinese", nativeName: "中文" },
      },
      changeNote: "更改语言将更新界面的语言。",
    },
  },
};

export default translations;
