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
  formButtonPrimary__verify: "Verify",
  formFieldAction__forgotPassword: "Забули пароль?",
  formFieldError__matchingPasswords: "Паролі збігаються.",
  formFieldError__notMatchingPasswords: "Паролі не збігаються.",
  formFieldError__verificationLinkExpired:
    "The verification link expired. Please request a new link.",
  formFieldHintText__optional: "Необов'язково",
  formFieldHintText__slug:
    "A slug is a human-readable ID that must be unique. It’s often used in URLs.",
  formFieldInputPlaceholder__backupCode: "",
  formFieldInputPlaceholder__confirmDeletionUserAccount: "Delete account",
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
  formFieldLabel__organizationDomain: "Domain",
  formFieldLabel__organizationDomainDeletePending:
    "Delete pending invitations and suggestions",
  formFieldLabel__organizationDomainEmailAddress: "Verification email address",
  formFieldLabel__organizationDomainEmailAddressDescription:
    "Enter an email address under this domain to receive a code and verify this domain.",
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
    subtitle: "щоб продовжити з {{applicationName}}",
    suggestionsAcceptedLabel: "Pending approval",
    title: "Оберіть акаунт",
    titleWithoutPersonal: "Оберіть відділ",
  },
  organizationProfile: {
    badge__automaticInvitation: "Automatic invitations",
    badge__automaticSuggestion: "Automatic suggestions",
    badge__manualInvitation: "No automatic enrollment",
    badge__unverified: "Unverified",
    createDomainPage: {
      subtitle:
        "Add the domain to verify. Users with email addresses at this domain can join the organization automatically or request to join.",
      title: "Add domain",
    },
    invitePage: {
      detailsTitle__inviteFailed:
        "Запрошення не вдалося надіслати. Виправте наступне і повторіть спробу:",
      formButtonPrimary__continue: "Надіслати запрошення",
      selectDropdown__role: "Select role",
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
            "Invite users by connecting an email domain with your organization. Anyone who signs up with a matching email domain will be able to join the organization anytime.",
          headerTitle: "Automatic invitations",
          primaryButton: "Manage verified domains",
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
            "Users who sign up with a matching email domain, will be able to see a suggestion to request to join your organization.",
          headerTitle: "Automatic suggestions",
          primaryButton: "Manage verified domains",
        },
        menuAction__approve: "Approve",
        menuAction__reject: "Reject",
        tableHeader__requested: "Requested access",
        table__emptyRow: "No requests to display",
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
        menuAction__manage: "Manage",
        menuAction__remove: "Delete",
        menuAction__verify: "Verify",
        primaryButton: "Add domain",
        subtitle:
          "Allow users to join the organization automatically or request to join based on a verified email domain.",
        title: "Verified domains",
      },
      successMessage: "Організацію було оновлено.",
      title: "Профіль організації",
    },
    removeDomainPage: {
      messageLine1: "The email domain {{domain}} will be removed.",
      messageLine2:
        "Users won’t be able to join the organization automatically after this.",
      successMessage: "{{domain}} has been removed.",
      title: "Remove domain",
    },
    start: {
      headerTitle__general: "Основне",
      headerTitle__members: "Учасники",
      profileSection: {
        primaryButton: "",
        title: "Профіль відділу",
        uploadAction__title: "Logo",
      },
    },
    verifiedDomainPage: {
      dangerTab: {
        calloutInfoLabel: "Removing this domain will affect invited users.",
        removeDomainActionLabel__remove: "Remove domain",
        removeDomainSubtitle: "Remove this domain from your verified domains",
        removeDomainTitle: "Remove domain",
      },
      enrollmentTab: {
        automaticInvitationOption__description:
          "Users are automatically invited to join the organization when they sign-up and can join anytime.",
        automaticInvitationOption__label: "Automatic invitations",
        automaticSuggestionOption__description:
          "Users receive a suggestion to request to join, but must be approved by an admin before they are able to join the organization.",
        automaticSuggestionOption__label: "Automatic suggestions",
        calloutInfoLabel:
          "Changing the enrollment mode will only affect new users.",
        calloutInvitationCountLabel:
          "Pending invitations sent to users: {{count}}",
        calloutSuggestionCountLabel:
          "Pending suggestions sent to users: {{count}}",
        manualInvitationOption__description:
          "Users can only be invited manually to the organization.",
        manualInvitationOption__label: "No automatic enrollment",
        subtitle:
          "Choose how users from this domain can join the organization.",
      },
      start: {
        headerTitle__danger: "Danger",
        headerTitle__enrollment: "Enrollment options",
      },
      subtitle:
        "The domain {{domain}} is now verified. Continue by selecting enrollment mode.",
      title: "Update {{domain}}",
    },
    verifyDomainPage: {
      formSubtitle: "Enter the verification code sent to your email address",
      formTitle: "Verification code",
      resendButton: "Didn't receive a code? Resend",
      subtitle: "The domain {{domainName}} needs to be verified via email.",
      subtitleVerificationCodeScreen:
        "A verification code was sent to {{emailAddress}}. Enter the code to continue.",
      title: "Verify domain",
    },
  },
  organizationSwitcher: {
    action__createOrganization: "Створити організацію",
    action__invitationAccept: "Join",
    action__manageOrganization: "Управління організацією",
    action__suggestionsAccept: "Request to join",
    notSelected: "Організація не обрана",
    personalWorkspace: "Особистий робочий простір",
    suggestionsAcceptedLabel: "Pending approval",
  },
  paginationButton__next: "Вперед",
  paginationButton__previous: "Назад",
  paginationRowText__displaying: "Відображення",
  paginationRowText__of: "з",
  signIn: {
    accountSwitcher: {
      action__addAccount: "Add account",
      action__signOutAll: "Sign out of all accounts",
      subtitle: "Select the account with which you wish to continue.",
      title: "Choose an account",
    },
    alternativeMethods: {
      actionLink: "Допомога",
      actionText: "Don’t have any of these?",
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
      subtitle: "Facing issues? You can use any of these methods to sign in.",
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
      subtitle: "to reset your password",
      subtitle_email: "First, enter the code sent to your email ID",
      subtitle_phone: "First, enter the code sent to your phone",
      title: "Reset password",
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
      requiredMessage:
        "For security reasons, it is required to reset your password.",
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
      "Sign up unsuccessful due to failed security validations. Please refresh the page to try again or reach out to support for more assistance.",
    captcha_unavailable:
      "Sign up unsuccessful due to failed bot validation. Please refresh the page to try again or reach out to support for more assistance.",
    form_code_incorrect: "",
    form_identifier_exists: "",
    form_identifier_exists__email_address: undefined,
    form_identifier_exists__phone_number: undefined,
    form_identifier_exists__username: undefined,
    form_identifier_not_found: "",
    form_param_format_invalid: "",
    form_param_format_invalid__email_address:
      "Email address must be a valid email address.",
    form_param_format_invalid__phone_number:
      "Phone number must be in a valid international format",
    form_param_max_length_exceeded__first_name:
      "First name should not exceed 256 characters.",
    form_param_max_length_exceeded__last_name:
      "Last name should not exceed 256 characters.",
    form_param_max_length_exceeded__name:
      "Name should not exceed 256 characters.",
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
      "You cannot delete your last identification.",
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
    phone_number_exists: "This phone number is taken. Please try another.",
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
    formButtonPrimary__add: "Add",
    formButtonPrimary__continue: "Продовжити",
    formButtonPrimary__finish: "Завершити",
    formButtonPrimary__remove: "Remove",
    formButtonPrimary__save: "Save",
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
        "When signing in, you will need to enter a verification code sent to this phone number as an additional step.",
      successMessage2:
        "Save these backup codes and store them somewhere safe. If you lose access to your authentication device, you can use backup codes to sign in.",
      successTitle: "SMS code verification enabled",
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
        "It is recommended to sign out of all other devices which may have used your old password.",
      readonly:
        "Your password can currently not be edited because you can sign in only via the enterprise connection.",
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
      verifySubtitle: "Enter the verification code sent to {{identifier}}",
      verifyTitle: "Verify phone number",
    },
    profilePage: {
      fileDropAreaHint:
        "Завантажте зображення у форматах JPG, PNG, GIF або WEBP розміром менше 10 МБ",
      imageFormDestructiveActionSubtitle: "Видалити зображення",
      imageFormSubtitle: "Завантажити зображення",
      imageFormTitle: "Зображення профілю",
      readonly:
        "Your profile information has been provided by the enterprise connection and cannot be edited.",
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
          "The required scopes have been updated, and you may be experiencing limited functionality. Please re-authorize this application to avoid any issues",
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
        title: "Enterprise accounts",
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
