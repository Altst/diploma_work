import { ModalProvider } from "@/components/providers/modal-provider";
import { QueryProvider } from "@/components/providers/query-provider";
import { ClerkProvider } from "@clerk/nextjs";
import { Toaster } from "sonner";

const localization = {
  locale: "uk-UA",
  backButton: "Назад",
  badge__default: "За замовчуванням",
  badge__otherImpersonatorDevice: "Інший пристрій-двійник",
  badge__primary: "Основний",
  badge__requiresAction: "Потребує дії",
  badge__thisDevice: "Цей пристрій",
  badge__unverified: "Неперевірений",
  badge__userDevice: "Пристрій користувача",
  badge__you: "Ви",
  createOrganization: {
    formButtonSubmit: "Створити організацію",
    invitePage: {
      formButtonReset: "Пропустити",
    },
    title: "Створити організацію",
  },
  dates: {
    lastDay: "Вчора в {{ date | timeString('uk-UA') }}",
    next6Days:
      "{{ date | weekday('uk-UA','long') }} в {{ date | timeString('uk-UA') }}",
    nextDay: "Завтра в {{ date | timeString('uk-UA') }}",
    numeric: "{{ date | numeric('uk-UA') }}",
    previous6Days:
      "Останній {{ date | weekday('uk-UA','long') }} в {{ date | timeString('uk-UA') }}",
    sameDay: "Сьогодні в {{ date | timeString('uk-UA') }}",
  },
  dividerText: "або",
  footerActionLink__useAnotherMethod: "Використовувати інший метод",
  footerPageLink__help: "Допомога",
  footerPageLink__privacy: "Приватність",
  footerPageLink__terms: "Умови",
  formButtonPrimary: "Продовжити",
  formButtonPrimary__verify: "Підтвердити",
  formFieldAction__forgotPassword: "Забули пароль?",
  formFieldError__matchingPasswords: "Паролі збігаються.",
  formFieldError__notMatchingPasswords: "Паролі не збігаються.",
  formFieldError__verificationLinkExpired:
    "Термін дії посилання для підтвердження закінчився. Будь ласка, надішліть запит на нове посилання.",
  formFieldHintText__optional: "Необов'язково",
  formFieldHintText__slug:
    "Слаг — це зрозумілий людині ідентифікатор, який має бути унікальним. Він часто використовується в URL-адресах.",
  formFieldInputPlaceholder__backupCode: "",
  formFieldInputPlaceholder__confirmDeletionUserAccount: "Видалити акаунт",
  formFieldInputPlaceholder__emailAddress: "",
  formFieldInputPlaceholder__emailAddress_username: "",
  formFieldInputPlaceholder__emailAddresses:
    "Введіть або вставте одну або більше адрес електронної пошти, розділених пробілами або комами",
  formFieldInputPlaceholder__firstName: "",
  formFieldInputPlaceholder__lastName: "",
  formFieldInputPlaceholder__organizationDomain: "",
  formFieldInputPlaceholder__organizationDomainEmailAddress: "",
  formFieldInputPlaceholder__organizationName: "",
  formFieldInputPlaceholder__organizationSlug: "",
  formFieldInputPlaceholder__password: "",
  formFieldInputPlaceholder__phoneNumber: "",
  formFieldInputPlaceholder__username: "",
  formFieldLabel__automaticInvitations:
    "Enable automatic invitations for this domain",
  formFieldLabel__backupCode: "Код відновлення",
  formFieldLabel__confirmDeletion: "Підтвердження",
  formFieldLabel__confirmPassword: "Підтвердження пароля",
  formFieldLabel__currentPassword: "Поточний пароль",
  formFieldLabel__emailAddress: "Пошта",
  formFieldLabel__emailAddress_username: "Пошта або ім'я користувача",
  formFieldLabel__emailAddresses: "Поштові адреси",
  formFieldLabel__firstName: "Ім'я",
  formFieldLabel__lastName: "Прізвище",
  formFieldLabel__newPassword: "Новий пароль",
  formFieldLabel__organizationDomain: "Домен",
  formFieldLabel__organizationDomainDeletePending:
    "Видалити незавершені запрошення та пропозиції",
  formFieldLabel__organizationDomainEmailAddress:
    "Підтвердження електронної адреси",
  formFieldLabel__organizationDomainEmailAddressDescription:
    "Введіть адресу електронної пошти в цьому домені, щоб отримати код і підтвердити цей домен.",
  formFieldLabel__organizationName: "Назва організації",
  formFieldLabel__organizationSlug: "URL адреса",
  formFieldLabel__passkeyName: undefined,
  formFieldLabel__password: "Пароль",
  formFieldLabel__phoneNumber: "Номер телефону",
  formFieldLabel__role: "Роль",
  formFieldLabel__signOutOfOtherSessions: "Вийти з усіх інших пристроїв",
  formFieldLabel__username: "Ім'я користувача",
  impersonationFab: {
    action__signOut: "Вийти",
    title: "Ви увійшли як {{identifier}}",
  },
  maintenanceMode: undefined,
  membershipRole__admin: "Адміністратор",
  membershipRole__basicMember: "Член",
  membershipRole__guestMember: "Гість",
  organizationList: {
    action__createOrganization: "Створити відділ",
    action__invitationAccept: "Приєднатися",
    action__suggestionsAccept: "Запит на приєднання",
    createOrganization: "Створити відділ",
    invitationAcceptedLabel: "Приєднався",
    subtitle: "щоб продовжити працювати з {{applicationName}}",
    suggestionsAcceptedLabel: "Очікує підтвердження",
    title: "Оберіть акаунт",
    titleWithoutPersonal: "Оберіть відділ",
  },
  organizationProfile: {
    badge__automaticInvitation: "Автоматичні запрошення",
    badge__automaticSuggestion: "Автоматичні пропозиції",
    badge__manualInvitation: "Немає автоматичної реєстрації",
    badge__unverified: "Неперевірений",
    createDomainPage: {
      subtitle:
        "Додайте домен для підтвердження. Користувачі з адресами електронної пошти в цьому домені можуть приєднатися до організації автоматично або подати запит на приєднання.",
      title: "Додати домен",
    },
    invitePage: {
      detailsTitle__inviteFailed:
        "Запрошення не вдалося надіслати. Виправте наступне і повторіть спробу:",
      formButtonPrimary__continue: "Надіслати запрошення",
      selectDropdown__role: "Виберіть роль",
      subtitle: "Запросіть нових учасників до цієї організації",
      successMessage: "Запрошення успішно надіслано",
      title: "Запросити учасників",
    },
    membersPage: {
      action__invite: "Запросити",
      activeMembersTab: {
        menuAction__remove: "Видалити учасника",
        tableHeader__actions: "",
        tableHeader__joined: "Приєднався",
        tableHeader__role: "Роль",
        tableHeader__user: "Користувач",
      },
      detailsTitle__emptyRow: "Немає учасників для відображення",
      invitationsTab: {
        autoInvitations: {
          headerSubtitle:
            "Запросіть користувачів, підключивши домен електронної пошти до вашої організації. Кожен, хто зареєструється з відповідним доменом електронної пошти, зможе приєднатися до організації будь-коли.",
          headerTitle: "Автоматичні запрошення",
          primaryButton: "Керуйте перевіреними доменами",
        },
        table__emptyRow: "Немає запрошень",
      },
      invitedMembersTab: {
        menuAction__revoke: "Відкликати запрошення",
        tableHeader__invited: "Запрошені",
      },
      requestsTab: {
        autoSuggestions: {
          headerSubtitle:
            "Користувачі, які зареєструються з відповідним доменом електронної пошти, зможуть побачити пропозицію подати запит на приєднання до вашої організації.",
          headerTitle: "Автоматичні пропозиції",
          primaryButton: "Керуйте перевіреними доменами",
        },
        menuAction__approve: "Затвердити",
        menuAction__reject: "Відхилити",
        tableHeader__requested: "Запит на доступ",
        table__emptyRow: "Немає запитів на відображення",
      },
      start: {
        headerTitle__invitations: "Запрошення",
        headerTitle__members: "Учасники",
        headerTitle__requests: "Запити",
      },
    },
    navbar: {
      description: "Керувати відділом",
      general: "Основні",
      members: "Члени відділу",
      title: "Відділ",
    },
    profilePage: {
      dangerSection: {
        deleteOrganization: {
          actionDescription:
            'Напишіть "{{organizationName}}" знизу, щоб продовжити',
          messageLine1: "Ви впевнені що хочете видалити відділ?",
          messageLine2: "Ця дія є постійною та незворотною",
          successMessage: "Ви видалили відділ",
          title: "Видалити відділ",
        },
        leaveOrganization: {
          actionDescription:
            'Напишіть "{{organizationName}}" знизу, щоб продовжити',
          messageLine1:
            "Ви впевнені, що хочете покинути цей відділ? Ви втратите доступ до цього відділу та його додатків.",
          messageLine2: "Ця дія є постійною і незворотною.",
          successMessage: "Ви покинули відділ.",
          title: "Покинути відділ",
        },
        title: "Небезпека",
      },
      domainSection: {
        menuAction__manage: "Керувати",
        menuAction__remove: "Видалити",
        menuAction__verify: "Підтвердити",
        primaryButton: "Додати домен",
        subtitle:
          "Дозволити користувачам приєднуватися до організації автоматично або надсилати запит на приєднання на основі підтвердженого домену електронної пошти.",
        title: "Перевірені домени",
      },
      successMessage: "Організацію було оновлено.",
      title: "Профіль організації",
    },
    removeDomainPage: {
      messageLine1: "Домен електронної пошти {{domain}} буде видалено.",
      messageLine2:
        "Після цього користувачі не зможуть автоматично приєднатися до організації.",
      successMessage: "{{domain}} видалено.",
      title: "Видалити домен",
    },
    start: {
      headerTitle__general: "Основне",
      headerTitle__members: "Учасники",
      profileSection: {
        primaryButton: "",
        title: "Профіль відділу",
        uploadAction__title: "Логотип",
      },
    },
    verifiedDomainPage: {
      dangerTab: {
        calloutInfoLabel:
          "Видалення цього домену вплине на запрошених користувачів.",
        removeDomainActionLabel__remove: "Видалити домен",
        removeDomainSubtitle:
          "Видалити цей домен зі списку підтверджених доменів",
        removeDomainTitle: "Видалити домен",
      },
      enrollmentTab: {
        automaticInvitationOption__description:
          "Користувачі автоматично запрошуються приєднатися до організації під час реєстрації та можуть приєднатися будь-коли.",
        automaticInvitationOption__label: "Автоматичні запрошення",
        automaticSuggestionOption__description:
          "Користувачі отримують пропозицію подати запит на приєднання, але вони повинні бути схвалені адміністратором, перш ніж вони зможуть приєднатися до організації.",
        automaticSuggestionOption__label: "Автоматичні запрошення",
        calloutInfoLabel:
          "Зміна режиму реєстрації вплине лише на нових користувачів.",
        calloutInvitationCountLabel:
          "Запрошення, що очікують на розгляд, надіслано користувачам: {{count}}",
        calloutSuggestionCountLabel:
          "Пропозиції, що очікують на розгляд, надіслано користувачам: {{count}}",
        manualInvitationOption__description:
          "Користувачів можна запросити в організацію лише вручну.",
        manualInvitationOption__label: "Немає автоматичної реєстрації",
        subtitle:
          "Виберіть, як користувачі з цього домену можуть приєднатися до організації.",
      },
      start: {
        headerTitle__danger: "Небезпека",
        headerTitle__enrollment: "Варіанти зарахування",
      },
      subtitle:
        "Домен {{domain}} тепер перевірено. Продовжте, вибравши режим реєстрації.",
      title: "Оновити {{domain}}",
    },
    verifyDomainPage: {
      formSubtitle:
        "Введіть код підтвердження, надісланий на вашу електронну адресу",
      formTitle: "Код підтвердження",
      resendButton: "Не отримали код? Надіслати повторно",
      subtitle: "Домен {{domainName}} потрібно підтвердити електронною поштою.",
      subtitleVerificationCodeScreen:
        "Код підтвердження надіслано на адресу {{emailAddress}}. Введіть код, щоб продовжити.",
      title: "Підтвердити домен",
    },
  },
  organizationSwitcher: {
    action__createOrganization: "Створити організацію",
    action__invitationAccept: "Приєднатися",
    action__manageOrganization: "Управління організацією",
    action__suggestionsAccept: "Запит на приєднання",
    notSelected: "Організація не обрана",
    personalWorkspace: "Особистий робочий простір",
    suggestionsAcceptedLabel: "Очікує підтвердження",
  },
  paginationButton__next: "Вперед",
  paginationButton__previous: "Назад",
  paginationRowText__displaying: "Відображення",
  paginationRowText__of: "з",
  signIn: {
    accountSwitcher: {
      action__addAccount: "Додати обліковий запис",
      action__signOutAll: "Вийти з усіх облікових записів",
      subtitle: "Виберіть обліковий запис, з яким ви бажаєте продовжити.",
      title: "Виберіть обліковий запис",
    },
    alternativeMethods: {
      actionLink: "Допомога",
      actionText: "У вас немає цього?",
      blockButton__backupCode: "Використовуйте код відновлення",
      blockButton__emailCode: "Надіслати код на {{identifier}}",
      blockButton__emailLink: "Надіслати посилання на {{identifier}}",
      blockButton__passkey: undefined,
      blockButton__password: "Увійти з паролем",
      blockButton__phoneCode: "Надіслати код на {{identifier}}",
      blockButton__totp: "Використовуйте аутентифікатор",
      getHelp: {
        blockButton__emailSupport: "Написати в підтримку",
        content:
          "Якщо у вас виникли труднощі з входом у Ваш акаунт, напишіть нам, і ми попрацюємо з Вами, щоб відновити доступ якнайшвидше.",
        title: "Допомога",
      },
      subtitle:
        "Виникли проблеми? Ви можете використовувати будь-який із цих методів для входу.",
      title: "Використовувати інший метод",
    },
    backupCodeMfa: {
      subtitle: 'щоб продовжити роботу в "{{applicationName}}"',
      title: "Введіть код відновлення",
    },
    emailCode: {
      formTitle: "Код підтвердження",
      resendButton: "Не отримали код? Повторно відправити",
      subtitle: "продовжити до {{applicationName}}",
      title: "Перевірте свою електронну пошту",
    },
    emailLink: {
      expired: {
        subtitle: "Поверніться на початкову вкладку, щоб продовжити.",
        title: "Термін дії цього посилання для підтвердження закінчився",
      },
      failed: {
        subtitle: "Поверніться на початкову вкладку, щоб продовжити",
        title: "Це посилання для підтвердження є недійсним",
      },
      formSubtitle:
        "Використовуйте посилання для підтвердження, надіслане на Вашу електронну пошту",
      formTitle: "Посилання для підтвердження",
      loading: {
        subtitle: "Вас буде перенаправлено найближчим часом",
        title: "Вхід в систему...",
      },
      resendButton: "Перевідправити посилання",
      subtitle: 'щоб продовжити роботу в "{{applicationName}}"',
      title: "Перевірте Вашу пошту",
      unusedTab: {
        title: "Вкладку можна закрити",
      },
      verified: {
        subtitle: "Ви скоро будете перенаправлені",
        title: "Успішний вхід",
      },
      verifiedSwitchTab: {
        subtitle: "Поверніться на попередню вкладку, щоб продовжити",
        subtitleNewTab:
          "Поверніться до щойно відкритої вкладки, щоб продовжити",
        titleNewTab: "Ви ввійшли на іншій вкладці",
      },
    },
    forgotPassword: {
      formTitle: "Код відновлення пароля",
      resendButton: "Надіслати код ще раз",
      subtitle: "щоб скинути пароль",
      subtitle_email:
        "Спочатку введіть код, надісланий на вашу електронну адресу",
      subtitle_phone: "Спочатку введіть код, надісланий на ваш телефон",
      title: "Скинути пароль",
    },
    forgotPasswordAlternativeMethods: {
      blockButton__resetPassword: "Відновити пароль",
      label__alternativeMethods: "Або, увійти іншим способом",
      title: "Забули пароль?",
    },
    noAvailableMethods: {
      message:
        "Не вдається виконати вхід. Немає доступного фактору автентифікації.",
      subtitle: "Виникла помилка",
      title: "Не вдалося увійти",
    },
    passkey: {
      subtitle: undefined,
      title: undefined,
    },
    password: {
      actionLink: "Використати інший метод",
      subtitle: 'щоб продовжити роботу в "{{applicationName}}"',
      title: "Введіть пароль",
    },
    passwordPwned: {
      title: undefined,
    },
    phoneCode: {
      formTitle: "Код підтвердження",
      resendButton: "Не отримали код? повторно відправити",
      subtitle: "продовжити в {{applicationName}}",
      title: "Перевірте свій телефон",
    },
    phoneCodeMfa: {
      formTitle: "Код підтвердження",
      resendButton: "Не отримали код? повторно відправити",
      subtitle: "",
      title: "Перевірте свій телефон",
    },
    resetPassword: {
      formButtonPrimary: "Скинути пароль",
      requiredMessage: "З міркувань безпеки потрібно скинути пароль.",
      successMessage:
        "Ваш пароль успішно змінено. Виконується вхід, зачекайте.",
      title: "Скинути пароль",
    },
    resetPasswordMfa: {
      detailsLabel:
        "Необхідно верифікувати вашу особу перед відновленням пароля",
    },
    start: {
      actionLink: "Зареєструватися",
      actionLink__use_email: "Використовувати пошту",
      actionLink__use_email_username:
        "Використовувати пошту або ім'я користувача",
      actionLink__use_passkey: undefined,
      actionLink__use_phone: "Використовувати номер телефону",
      actionLink__use_username: "Використовувати ім'я користувача",
      actionText: "Немає акаунта?",
      subtitle: 'щоб продовжити роботу в "{{applicationName}}"',
      title: "Увійти",
    },
    totpMfa: {
      formTitle: "Верифікаційний код",
      subtitle: "",
      title: "Двоетапна перевірка",
    },
  },
  signInEnterPasswordTitle: "Введіть Ваш пароль",
  signUp: {
    continue: {
      actionLink: "Увійти",
      actionText: "Уже є акаунт?",
      subtitle: 'щоб продовжити роботу в "{{applicationName}}"',
      title: "Заповніть усі поля",
    },
    emailCode: {
      formSubtitle:
        "Введіть код підтвердження, надісланий на вашу електронну адресу",
      formTitle: "Код підтвердження",
      resendButton: "Не отримали код? Повторно відправити",
      subtitle: "продовжити до {{applicationName}}",
      title: "Підтвердіть свою електронну пошту",
    },
    emailLink: {
      formSubtitle:
        "Використовуйте посилання для підтвердження, надіслане на вашу електронну адресу",
      formTitle: "Посилання для підтвердження",
      loading: {
        title: "Реєстрація...",
      },
      resendButton: "Не отримали посилання? Повторно відправити",
      subtitle: "продовжити до {{applicationName}}",
      title: "Підтвердіть свою електронну пошту",
      verified: {
        title: "Успішно зареєстровано",
      },
      verifiedSwitchTab: {
        subtitle: "Поверніться на нову вкладку, щоб продовжити",
        subtitleNewTab: "Повернутися до попередньої вкладки для продовження",
        title: "Успішно перевірено email",
      },
    },
    phoneCode: {
      formSubtitle:
        "Введіть код підтвердження, надісланий на ваш номер телефону",
      formTitle: "Код підтвердження",
      resendButton: "Не отримали код? Повторно відправити",
      subtitle: "продовжити з {{applicationName}}",
      title: "Підтвердіть свій телефон",
    },
    start: {
      actionLink: "Увійти",
      actionText: "Уже є акаунт?",
      subtitle: 'щоб продовжити роботу в "{{applicationName}}"',
      title: "Створіть Ваш акаунт",
    },
  },
  socialButtonsBlockButton: "Продовжити за допомогою {{provider|titleize}}",
  unstable__errors: {
    captcha_invalid:
      "Зареєструватися не вдалось через невдалу перевірку безпеки. Оновіть сторінку, щоб повторити спробу, або зверніться до служби підтримки, щоб отримати додаткову допомогу.",
    captcha_unavailable:
      "Зареєструватися не вдалось через помилку перевірки ботом. Оновіть сторінку, щоб повторити спробу, або зверніться до служби підтримки, щоб отримати додаткову допомогу.",
    form_code_incorrect: "",
    form_identifier_exists: "",
    form_identifier_exists__email_address: undefined,
    form_identifier_exists__phone_number: undefined,
    form_identifier_exists__username: undefined,
    form_identifier_not_found: "",
    form_param_format_invalid: "",
    form_param_format_invalid__email_address:
      "Електронна адреса має бути дійсною.",
    form_param_format_invalid__phone_number:
      "Номер телефону має бути в дійсному міжнародному форматі",
    form_param_max_length_exceeded__first_name:
      "Ім'я не повинно перевищувати 256 символів.",
    form_param_max_length_exceeded__last_name:
      "Прізвище не повинно перевищувати 256 символів.",
    form_param_max_length_exceeded__name:
      "Назва не повинна перевищувати 256 символів.",
    form_param_nil: "",
    form_password_incorrect: "",
    form_password_length_too_short: "",
    form_password_not_strong_enough: "Ваш пароль недостатньо надійний.",
    form_password_pwned:
      "Цей пароль було зламано і його не можна використовувати, спробуйте інший пароль.",
    form_password_pwned__sign_in: undefined,
    form_password_size_in_bytes_exceeded:
      "Ваш пароль перевищує максимально допустиму кількість байтів, скоротіть його або видаліть деякі спеціальні символи.",
    form_password_validation_failed: "Невірний пароль",
    form_username_invalid_character: "",
    form_username_invalid_length: "",
    identification_deletion_failed:
      "Ви не можете видалити свою останню ідентифікацію.",
    not_allowed_access: "",
    passkey_already_exists: undefined,
    passkey_not_supported: undefined,
    passkey_pa_not_supported: undefined,
    passkey_registration_cancelled: undefined,
    passkey_retrieval_cancelled: undefined,
    passwordComplexity: {
      maximumLength: "менше {{length}} символів",
      minimumLength: "{{length}} або більше символів",
      requireLowercase: "букву в нижньому регістрі",
      requireNumbers: "цифру",
      requireSpecialCharacter: "спеціальний символ",
      requireUppercase: "букву у верхньому регістрі",
      sentencePrefix: "Ваш пароль повинен містити",
    },
    phone_number_exists: "Цей номер телефону зайнятий. Спробуйте інший.",
    zxcvbn: {
      couldBeStronger:
        "Ваш пароль підходить, але міг би бути надійнішим. Спробуйте додати більше символів.",
      goodPassword: "Хороша робота. Це відмінний пароль.",
      notEnough: "Ваш пароль недостатньо надійний.",
      suggestions: {
        allUppercase: "Робіть великими деякі, але не всі букви.",
        anotherWord: "Додайте більше слів, які менш поширені.",
        associatedYears: "Уникайте років, які пов'язані з вами.",
        capitalization: "Робіть великими не тільки першу букву",
        dates: "Уникайте дат і років, які пов'язані з вами.",
        l33t: 'Уникайте передбачуваних замін букв, таких як "@" замість "a".',
        longerKeyboardPattern:
          "Використовуйте довші поєднання клавіш і кілька разів змінюйте напрямок введення.",
        noNeed:
          "Ви можете створювати надійні паролі без використання символів, цифр або великих літер.",
        pwned:
          "Якщо ви використовуєте цей пароль в іншому місці, вам слід змінити його.",
        recentYears: "Уникайте останніх років.",
        repeated: "Уникайте повторюваних слів і символів.",
        reverseWords:
          "Уникайте зворотного написання часто використовуваних слів.",
        sequences: "Уникайте частих послідовностей символів.",
        useWords: "Використовуйте кілька слів, але уникайте поширених фраз.",
      },
      warnings: {
        common: "Це поширений пароль.",
        commonNames: "Поширені імена та прізвища легко вгадати.",
        dates: "Дати легко вгадати.",
        extendedRepeat:
          'Шаблони символів, що повторюються, такі як "abcabcabcabc", легко вгадати.',
        keyPattern: "Короткі поєднання клавіш легко вгадати.",
        namesByThemselves: "Одні імена або прізвища легко вгадати.",
        pwned: "Ваш пароль було розкрито внаслідок витоку даних в Інтернеті.",
        recentYears: "Останні роки легко вгадати.",
        sequences:
          'Часті послідовності символів, такі як "abc", легко вгадати.',
        similarToCommon: "Цей пароль схожий на часто використовуваний пароль.",
        simpleRepeat: 'Символи, що повторюються, такі як "aaa", легко вгадати.',
        straightRow: "Прямі ряди клавіш на клавіатурі легко вгадати.",
        topHundred: "Це часто використовуваний пароль.",
        topTen: "Це дуже часто використовуваний пароль.",
        userInputs:
          "Не повинно бути ніяких особистих даних або даних, пов'язаних зі сторінкою.",
        wordByItself: "Окремі слова легко вгадати.",
      },
    },
  },
  userButton: {
    action__addAccount: "Додати акаунт",
    action__manageAccount: "Управління акаунтом",
    action__signOut: "Вийти",
    action__signOutAll: "Вийти з усіх акаунтів",
  },
  userProfile: {
    backupCodePage: {
      actionLabel__copied: "Скопійовано!",
      actionLabel__copy: "Копіювати все",
      actionLabel__download: "Завантажити .txt",
      actionLabel__print: "Друк",
      infoText1: "Резервні коди будуть включені для цього облікового запису.",
      infoText2:
        "Зберігайте резервні коди в таємниці та зберігайте їх у безпеці. Ви можете створити нові резервні коди, якщо підозрюєте, що вони були скомпрометовані.",
      subtitle__codelist: "Зберігайте їх у безпеці та не повідомляйте нікому.",
      successMessage:
        "Резервні коди ввімкнено. Ви можете використовувати один із цих кодів для входу до свого облікового запису, якщо ви втратите доступ до свого аутентифікаційного пристрою. Кожен код може бути використаний тільки один раз.",
      successSubtitle:
        "Ви можете використовувати один із цих кодів для входу у свій обліковий запис, якщо ви втратите доступ до свого аутентифікаційного пристрою.",
      title: "Додати резервний код підтвердження",
      title__codelist: "Резервні коди",
    },
    connectedAccountPage: {
      formHint: "Виберіть провайдера для підключення вашого акаунта.",
      formHint__noAccounts: "Немає доступних провайдерів зовнішніх акаунтів.",
      removeResource: {
        messageLine1:
          "{{identifier}} буде видалено з вашого облікового запису.",
        messageLine2:
          "Ви більше не зможете використовувати цей підключений акаунт, і будь-які залежні функції більше не працюватимуть.",
        successMessage:
          "{{connectedAccount}} було видалено з вашого облікового запису.",
        title: "Видалити підключений акаунт",
      },
      socialButtonsBlockButton: "Підключити акаунт {{provider|titleize}}",
      successMessage: "Провайдера було додано до вашого акаунта",
      title: "Додати підключений акаунт",
    },
    deletePage: {
      actionDescription: 'Введіть "Видалити акаунт" нижче, щоб продовжити.',
      confirm: "Видалити акаунт",
      messageLine1: "Ви впевнені, що хочете видалити свій акаунт?",
      messageLine2: "Ця дія є остаточною та незворотною.",
      title: "Видалити акаунт",
    },
    emailAddressPage: {
      emailCode: {
        formHint:
          "На цю адресу електронної пошти буде надіслано лист із верифікаційним кодом.",
        formSubtitle:
          "Введіть верифікаційний код, відправлений на {{identifier}}",
        formTitle: "Верифікаційний код",
        resendButton: "Надіслати код повторно",
        successMessage:
          "Адресу електронної пошти {{identifier}} було додано до вашого облікового запису.",
      },
      emailLink: {
        formHint:
          "На цю адресу електронної пошти буде надіслано верифікаційне посилання.",
        formSubtitle:
          "Натисніть на верифікаційне посилання в листі, відправленому на {{identifier}}",
        formTitle: "Верифікаційне посилання",
        resendButton: "Надіслати посилання повторно",
        successMessage:
          "Адресу електронної пошти {{identifier}} було додано до вашого облікового запису.",
      },
      removeResource: {
        messageLine1: "{{identifier}} буде видалено з цього акаунта.",
        messageLine2:
          "Ви більше не зможете увійти з використанням цієї адреси електронної пошти.",
        successMessage:
          "{{emailAddress}} було видалено з вашого облікового запису.",
        title: "Видалити адресу електронної пошти",
      },
      title: "Додати адресу електронної пошти",
      verifyTitle: "Verify email address",
    },
    formButtonPrimary__add: "Додати",
    formButtonPrimary__continue: "Продовжити",
    formButtonPrimary__finish: "Завершити",
    formButtonPrimary__remove: "Видалити",
    formButtonPrimary__save: "Зберегти",
    formButtonReset: "Скасувати",
    mfaPage: {
      formHint: "Виберіть метод для додавання.",
      title: "Додати двофакторну аутентифікацію",
    },
    mfaPhoneCodePage: {
      backButton: "Use existing number",
      primaryButton__addPhoneNumber: "Додати номер телефону",
      removeResource: {
        messageLine1:
          "{{identifier}} більше не буде отримувати коди підтвердження при вході в систему.",
        messageLine2:
          "Ваш обліковий запис буде менш захищеним. Ви впевнені, що хочете продовжити?",
        successMessage:
          "Двоетапна перевірка з кодом з SMS була видалена для {{mfaPhoneCode}}",
        title: "Видалити двоетапну перевірку",
      },
      subtitle__availablePhoneNumbers:
        "Виберіть номер телефону для реєстрації у двоетапній перевірці з кодом з SMS.",
      subtitle__unavailablePhoneNumbers:
        "Немає доступних номерів телефону для реєстрації в двоетапній перевірці з кодом з SMS.",
      successMessage1:
        "Під час входу вам потрібно буде додатково ввести код підтвердження, надісланий на цей номер телефону.",
      successMessage2:
        "Збережіть ці резервні коди та зберігайте їх у безпечному місці. Якщо ви втратите доступ до свого пристрою автентифікації, ви можете використовувати резервні коди для входу.",
      successTitle: "Увімкнено перевірку коду SMS",
      title: "Додати перевірку кодом з SMS",
    },
    mfaTOTPPage: {
      authenticatorApp: {
        buttonAbleToScan__nonPrimary: "Замість цього відскануйте QR-код",
        buttonUnableToScan__nonPrimary: "Не вдається відсканувати QR-код?",
        infoText__ableToScan:
          "Налаштуйте новий метод входу у вашому застосунку аутентифікації та відскануйте наступний QR-код, щоб пов'язати його з вашим обліковим записом.",
        infoText__unableToScan:
          "Налаштуйте новий метод входу у вашому застосунку автентифікації та введіть нижче наданий ключ.",
        inputLabel__unableToScan1:
          "Переконайтеся, що ввімкнено одноразові паролі на основі часу, потім завершіть зв'язування свого облікового запису.",
        inputLabel__unableToScan2:
          "Крім того, якщо ваш додаток аутентифікації підтримує URI TOTP, ви також можете скопіювати повний URI.",
      },
      removeResource: {
        messageLine1:
          "Верифікаційний код із цього додатка автентифікації більше не буде потрібен під час входу в систему.",
        messageLine2:
          "Ваш акаунт буде менш захищеним. Ви впевнені, що хочете продовжити?",
        successMessage:
          "Двоетапну автентифікацію через застосунок автентифікації було видалено.",
        title: "Видалення двоетапної аутентифікації",
      },
      successMessage:
        "Двоетапна перевірка ввімкнена. Під час входу в систему вам потрібно буде ввести верифікаційний код із цього додатка як додатковий крок.",
      title: "Додати додаток аутентифікації",
      verifySubtitle:
        "Введіть верифікаційний код, створений вашим додатком аутентифікації",
      verifyTitle: "Верифікаційний код",
    },
    mobileButton__menu: "Меню",
    navbar: {
      account: "Акаунт",
      description: "Змінити інформацію",
      security: "Безпека",
      title: "Акаунт",
    },
    passkeyScreen: {
      removeResource: {
        messageLine1: undefined,
        title: undefined,
      },
      subtitle__rename: undefined,
      title__rename: undefined,
    },
    passwordPage: {
      checkboxInfoText__signOutOfOtherSessions:
        "Рекомендується вийти з усіх інших пристроїв, на яких міг використовуватися ваш старий пароль.",
      readonly:
        "Ваш пароль наразі не можна змінити, оскільки ви можете ввійти лише через підключення підприємства.",
      successMessage__set: "Ваш пароль встановлено.",
      successMessage__signOutOfOtherSessions:
        "Усі інші пристрої були виведені із системи.",
      successMessage__update: "Ваш пароль було оновлено.",
      title__set: "Встановити пароль",
      title__update: "Змінити пароль",
    },
    phoneNumberPage: {
      infoText:
        "На цей номер телефону буде надіслано текстове повідомлення з верифікаційним посиланням.",
      removeResource: {
        messageLine1: "{{identifier}} буде видалено з цього облікового запису.",
        messageLine2:
          "Ви більше не зможете увійти, використовуючи цей номер телефону.",
        successMessage:
          "{{phoneNumber}} було видалено з вашого облікового запису.",
        title: "Видалити номер телефону",
      },
      successMessage: "{{identifier}} було додано до вашого облікового запису.",
      title: "Додати номер телефону",
      verifySubtitle: "Введіть код підтвердження, надісланий на {{identifier}}",
      verifyTitle: "Підтвердити номер телефону",
    },
    profilePage: {
      fileDropAreaHint:
        "Завантажте зображення у форматах JPG, PNG, GIF або WEBP розміром менше 10 МБ",
      imageFormDestructiveActionSubtitle: "Видалити зображення",
      imageFormSubtitle: "Завантажити зображення",
      imageFormTitle: "Зображення профілю",
      readonly:
        "Інформацію вашого профілю надано корпоративним з’єднанням, і її неможливо редагувати.",
      successMessage: "Ваш профіль було оновлено.",
      title: "Оновити профіль",
    },
    start: {
      activeDevicesSection: {
        destructiveAction: "Вийти з пристрою",
        title: "Активні пристрої",
      },
      connectedAccountsSection: {
        actionLabel__connectionFailed: "Спробувати знову",
        actionLabel__reauthorize: "Авторизувати зараз",
        destructiveActionTitle: "Видалити",
        primaryButton: "Підключити акаунт",
        subtitle__reauthorize:
          "Потрібні області оновлено, і можливо, ви зіткнулися з обмеженою функціональністю. Повторно авторизуйте цю програму, щоб уникнути проблем",
        title: "Підключені акаунти",
      },
      dangerSection: {
        deleteAccountButton: "Видалити акаунт",
        title: "Небезпека",
      },
      emailAddressesSection: {
        destructiveAction: "Видалити адресу електронної пошти",
        detailsAction__nonPrimary: "Встановити як основну",
        detailsAction__primary: "Завершити перевірку",
        detailsAction__unverified: "Завершити перевірку",
        primaryButton: "Додати адресу електронної пошти",
        title: "Адреси електронної пошти",
      },
      enterpriseAccountsSection: {
        title: "Облікові записи підприємства",
      },
      headerTitle__account: "Обліковий запис",
      headerTitle__security: "Безпека",
      mfaSection: {
        backupCodes: {
          actionLabel__regenerate: "Згенерувати коди",
          headerTitle: "Резервні коди",
          subtitle__regenerate:
            "Отримайте новий набір безпечних резервних кодів. Попередні резервні коди будуть видалені і не можуть бути використані.",
          title__regenerate: "Згенерувати нові резервні коди",
        },
        phoneCode: {
          actionLabel__setDefault: "Встановити за замовчуванням",
          destructiveActionLabel: "Видалити номер телефону",
        },
        primaryButton: "Додати двофакторну аутентифікацію",
        title: "Двофакторна аутентифікація",
        totp: {
          destructiveActionTitle: "Видалити",
          headerTitle: "Додаток аутентифікації",
        },
      },
      passkeysSection: {
        menuAction__destructive: undefined,
        menuAction__rename: undefined,
        title: undefined,
      },
      passwordSection: {
        primaryButton__setPassword: "Встановити пароль",
        primaryButton__updatePassword: "Змінити пароль",
        title: "Пароль",
      },
      phoneNumbersSection: {
        destructiveAction: "Видалити номер телефону",
        detailsAction__nonPrimary: "Встановити як основний",
        detailsAction__primary: "Завершити верифікацію",
        detailsAction__unverified: "Завершити верифікацію",
        primaryButton: "Додати номер телефону",
        title: "Номери телефонів",
      },
      profileSection: {
        primaryButton: "",
        title: "Профіль",
      },
      usernameSection: {
        primaryButton__setUsername: "Встановити ім'я користувача",
        primaryButton__updateUsername: "Змінити ім'я користувача",
        title: "Ім'я користувача",
      },
      web3WalletsSection: {
        destructiveAction: "Видалити гаманець",
        primaryButton: "Web3 гаманці",
        title: "Web3 гаманці",
      },
    },
    usernamePage: {
      successMessage: "Ім'я користувача було оновлено.",
      title__set: "Оновити ім'я користувача",
      title__update: "Оновити ім'я користувача",
    },
    web3WalletPage: {
      removeResource: {
        messageLine1: "{{identifier}} буде видалено з цього облікового запису.",
        messageLine2:
          "Ви більше не зможете Увійти з використанням цього web3 гаманця.",
        successMessage:
          "{{web3Wallet}} було видалено з вашого облікового запису.",
        title: "Видалити web3 гаманець",
      },
      subtitle__availableWallets:
        "Виберіть web3 гаманець для підключення до вашого облікового запису.",
      subtitle__unavailableWallets: "Немає доступних web3 гаманців.",
      successMessage: "Гаманець було додано до вашого облікового запису.",
      title: "Додати web3 гаманець",
    },
  },
};

const PlatformLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <ClerkProvider localization={localization}>
      <QueryProvider>
        <Toaster />
        <ModalProvider />
        {children}
      </QueryProvider>
    </ClerkProvider>
  );
};

export default PlatformLayout;
