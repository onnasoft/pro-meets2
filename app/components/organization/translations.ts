const translations = {
  en: {
    createTitle: "Create new organization",
    updateTitle: "Update organization",
    fields: {
      name: "Organization name",
      description: "Description",
      website: "Website URL",
      location: "Location",
      phone: "Phone number",
      members: "Invite members (emails)",
      logo: "Logo URL",
      plan: "Subscription Plan",
    },
    placeholders: {
      website: "https://example.com",
      members: "user1@example.com, user2@example.com",
    },
    plans: {
      free: "Free",
      pro: "Pro",
      enterprise: "Enterprise",
      paymentRequired: "Payment Required",
    },
    planDescriptions: {
      free: "Basic features for small teams",
      pro: "Advanced features for growing businesses",
      enterprise: "Custom solutions for large organizations",
    },
    cancel: "Cancel",
    submit: "Submit",
    submitting: "Creating...",
    paymentRequired: {
      title: "Payment Method Required",
      description:
        "You need to register a payment method before selecting this plan. You will be redirected to the billing page.",
      cancel: "Cancel",
      confirm: "Confirm",
    },
    errors: {
      name: {
        min: "Name must be at least 3 characters",
        empty: "Name is required",
        required: "Name is required",
      },
      website: {
        uri: "Please enter a valid URL (https://example.com)",
      },
      phone: {
        pattern: "Please enter a valid phone number",
      },
      members: {
        emails: "Please enter valid email addresses separated by commas",
      },
      plan: {
        required: "Please select a plan",
      },
    },
    successMessage: "Organization created successfully!",
    errorMessage: "Error creating organization",
    optional: "(optional)",
  },
  es: {
    createTitle: "Crear nueva organización",
    updateTitle: "Actualizar organización",
    fields: {
      name: "Nombre de la organización",
      description: "Descripción",
      website: "URL del sitio web",
      location: "Ubicación",
      phone: "Número de teléfono",
      members: "Invitar miembros (correos electrónicos)",
      logo: "URL del logo",
      plan: "Plan de Suscripción",
    },
    placeholders: {
      website: "https://ejemplo.com",
      members: "usuario1@ejemplo.com, usuario2@ejemplo.com",
    },
    plans: {
      free: "Gratis",
      pro: "Pro",
      enterprise: "Empresa",
      paymentRequired: "Pago Requerido",
    },
    planDescriptions: {
      free: "Funciones básicas para equipos pequeños",
      pro: "Funciones avanzadas para negocios en crecimiento",
      enterprise: "Soluciones personalizadas para grandes organizaciones",
    },
    cancel: "Cancelar",
    submit: "Enviar",
    submitting: "Creando...",
    paymentRequired: {
      title: "Método de Pago Requerido",
      description:
        "Necesitas registrar un método de pago antes de seleccionar este plan. Serás redirigido a la página de facturación.",
      cancel: "Cancelar",
      confirm: "Confirmar",
    },
    errors: {
      name: {
        min: "El nombre debe tener al menos 3 caracteres",
        empty: "El nombre es obligatorio",
        required: "El nombre es obligatorio",
      },
      website: {
        uri: "Ingresa una URL válida (https://ejemplo.com)",
      },
      phone: {
        pattern: "Ingresa un número de teléfono válido",
      },
      members: {
        emails: "Ingresa direcciones de correo válidas separadas por comas",
      },
      plan: {
        required: "Por favor selecciona un plan",
      },
    },
    successMessage: "¡Organización creada exitosamente!",
    errorMessage: "Error al crear la organización",
    optional: "(opcional)",
  },
  fr: {
    createTitle: "Créer une nouvelle organisation",
    updateTitle: "Mettre à jour l'organisation",
    fields: {
      name: "Nom de l'organisation",
      description: "Description",
      website: "URL du site Web",
      location: "Emplacement",
      phone: "Numéro de téléphone",
      members: "Inviter des membres (emails)",
      logo: "URL du logo",
      plan: "Plan d'abonnement",
    },
    placeholders: {
      website: "https://exemple.com",
      members: "utilisateur1@exemple.com, utilisateur2@exemple.com",
    },
    plans: {
      free: "Gratuit",
      pro: "Pro",
      enterprise: "Entreprise",
      paymentRequired: "Paiement Requis",
    },
    planDescriptions: {
      free: "Fonctionnalités de base pour petites équipes",
      pro: "Fonctionnalités avancées pour entreprises en croissance",
      enterprise: "Solutions personnalisées pour grandes organisations",
    },
    cancel: "Annuler",
    submit: "Soumettre",
    submitting: "Création...",
    paymentRequired: {
      title: "Paiement Requis",
      description:
        "Vous devez enregistrer un mode de paiement avant de sélectionner ce plan. Vous serez redirigé vers la page de facturation.",
      cancel: "Annuler",
      confirm: "Confirmer",
    },
    errors: {
      name: {
        min: "Le nom doit comporter au moins 3 caractères",
        empty: "Le nom est requis",
        required: "Le nom est requis",
      },
      website: {
        uri: "Veuillez entrer une URL valide (https://exemple.com)",
      },
      phone: {
        pattern: "Veuillez entrer un numéro de téléphone valide",
      },
      members: {
        emails:
          "Veuillez entrer des adresses email valides séparées par des virgules",
      },
      plan: {
        required: "Veuillez sélectionner un plan",
      },
    },
    successMessage: "Organisation créée avec succès !",
    errorMessage: "Erreur lors de la création de l'organisation",
    optional: "(optionnel)",
  },
  ja: {
    createTitle: "新しい組織を作成",
    updateTitle: "組織を更新",
    fields: {
      name: "組織名",
      description: "説明",
      website: "ウェブサイトURL",
      location: "所在地",
      phone: "電話番号",
      members: "メンバーを招待（メールアドレス）",
      logo: "ロゴURL",
      plan: "サブスクリプションプラン",
    },
    placeholders: {
      website: "https://example.com",
      members: "user1@example.com, user2@example.com",
    },
    plans: {
      free: "無料",
      pro: "プロ",
      enterprise: "エンタープライズ",
      paymentRequired: "支払いが必要",
    },
    planDescriptions: {
      free: "小規模チーム向けの基本機能",
      pro: "成長中の企業向けの高度な機能",
      enterprise: "大規模組織向けのカスタムソリューション",
    },
    cancel: "キャンセル",
    submit: "送信",
    submitting: "作成中...",
    paymentRequired: {
      title: "支払い方法が必要",
      description:
        "このプランを選択する前に支払い方法を登録する必要があります。請求ページにリダイレクトされます。",
      cancel: "キャンセル",
      confirm: "確認",
    },
    errors: {
      name: {
        min: "名前は3文字以上である必要があります",
        empty: "名前は必須です",
        required: "名前は必須です",
      },
      website: {
        uri: "有効なURLを入力してください (https://example.com)",
      },
      phone: {
        pattern: "有効な電話番号を入力してください",
      },
      members: {
        emails: "有効なメールアドレスをカンマで区切って入力してください",
      },
      plan: {
        required: "プランを選択してください",
      },
    },
    successMessage: "組織が正常に作成されました！",
    errorMessage: "組織の作成中にエラーが発生しました",
    optional: "（任意）",
  },
  zh: {
    createTitle: "创建新组织",
    updateTitle: "更新组织",
    fields: {
      name: "组织名称",
      description: "描述",
      website: "网站网址",
      location: "位置",
      phone: "电话号码",
      members: "邀请成员（电子邮件）",
      logo: "Logo 地址",
      plan: "订阅计划",
    },
    placeholders: {
      website: "https://example.com",
      members: "user1@example.com, user2@example.com",
    },
    plans: {
      free: "免费",
      pro: "专业版",
      enterprise: "企业版",
      paymentRequired: "需要付款",
    },
    planDescriptions: {
      free: "适用于小型团队的基本功能",
      pro: "适用于成长型企业的高级功能",
      enterprise: "适用于大型组织的定制解决方案",
    },
    cancel: "取消",
    submit: "提交",
    submitting: "创建中...",
    paymentRequired: {
      title: "需要支付方式",
      description:
        "在选择此计划之前，您需要注册支付方式。您将被重定向到账单页面。",
      cancel: "取消",
      confirm: "确认",
    },
    errors: {
      name: {
        min: "名称至少需要 3 个字符",
        empty: "名称为必填项",
        required: "名称为必填项",
      },
      website: {
        uri: "请输入有效的网址 (https://example.com)",
      },
      phone: {
        pattern: "请输入有效的电话号码",
      },
      members: {
        emails: "请输入用逗号分隔的有效电子邮件地址",
      },
      plan: {
        required: "请选择一个计划",
      },
    },
    successMessage: "组织创建成功！",
    errorMessage: "创建组织时出错",
    optional: "（可选）",
  },
};

export default translations;
