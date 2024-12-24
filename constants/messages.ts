export const authErrorMessages: { [key: string]: string } = {
  anonymous_provider_disabled: "Anonymous sign-ins are disabled.",
  bad_code_verifier:
    "The code verifier does not match the expected one in the PKCE flow.",
  bad_json: "The request body is not valid JSON.",
  bad_jwt: "The JWT in the Authorization header is not valid.",
  bad_oauth_callback: "OAuth callback does not have all required attributes.",
  bad_oauth_state: "OAuth state is in the incorrect format.",
  captcha_failed:
    "Captcha verification failed. Please check your captcha integration.",
  conflict: "Database conflict. Please retry the request later.",
  email_address_invalid:
    "The provided email address is invalid. Please use a valid email.",
  email_address_not_authorized:
    "Email sending is not allowed for this address.",
  email_conflict_identity_not_deletable:
    "Cannot unlink identity as it would conflict with another user’s email.",
  email_exists: "The email address already exists in the system.",
  email_not_confirmed:
    "Your email address is not confirmed. Please confirm your email.",
  email_provider_disabled: "Signups are disabled for email and password.",
  flow_state_expired: "The PKCE flow state has expired. Please log in again.",
  flow_state_not_found: "The PKCE flow state no longer exists.",
  hook_payload_invalid_content_type:
    "The payload from Auth does not have a valid Content-Type header.",
  hook_payload_over_size_limit:
    "The payload from Auth exceeds the maximum size limit.",
  hook_timeout: "Unable to reach hook within the time allocated.",
  hook_timeout_after_retry: "Unable to reach hook after retries.",
  identity_already_exists: "The identity is already linked to a user.",
  identity_not_found: "The identity does not exist.",
  insufficient_aal:
    "User must have a higher Authenticator Assurance Level to access this API.",
  invite_not_found: "The invite is expired or already used.",
  invalid_credentials:
    "The login credentials are invalid. Please check your email and password.",
  manual_linking_disabled: "Manual linking is disabled on the Auth server.",
  mfa_challenge_expired:
    "MFA challenge has expired. Please request a new challenge.",
  mfa_factor_name_conflict: "MFA factors cannot have the same friendly name.",
  mfa_factor_not_found: "The specified MFA factor no longer exists.",
  mfa_ip_address_mismatch:
    "MFA enrollment must begin and end with the same IP address.",
  mfa_phone_enroll_not_enabled: "Phone MFA enrollment is disabled.",
  mfa_phone_verify_not_enabled: "Phone MFA verification is disabled.",
  mfa_totp_enroll_not_enabled: "TOTP MFA enrollment is disabled.",
  mfa_totp_verify_not_enabled: "TOTP MFA verification is disabled.",
  mfa_verification_failed: "The MFA code is incorrect. Please try again.",
  mfa_verification_rejected: "The MFA verification was rejected.",
  mfa_verified_factor_exists:
    "A verified phone factor already exists. Please unenroll it to continue.",
  mfa_web_authn_enroll_not_enabled: "WebAuthn MFA enrollment is disabled.",
  mfa_web_authn_verify_not_enabled: "WebAuthn MFA verification is disabled.",
  no_authorization: "Authorization header is missing. Please provide it.",
  not_admin: "User is not an admin. Admin role required.",
  oauth_provider_not_supported: "The OAuth provider is not supported.",
  otp_disabled: "OTP (magic link) sign-in is disabled.",
  otp_expired: "The OTP has expired. Please request a new OTP.",
  over_email_send_rate_limit:
    "Too many emails have been sent to this address. Please wait before trying again.",
  over_request_rate_limit:
    "Too many requests have been made. Please try again later.",
  over_sms_send_rate_limit:
    "Too many SMS messages have been sent to this phone number. Please wait before trying again.",
  phone_exists: "The phone number already exists in the system.",
  phone_not_confirmed: "Sign-in is not allowed for unconfirmed phone numbers.",
  phone_provider_disabled: "Signups are disabled for phone and password.",
  provider_disabled: "The OAuth provider is disabled.",
  provider_email_needs_verification:
    "Email verification is required after completing OAuth.",
  reauthentication_needed:
    "User needs to reauthenticate to change their password.",
  reauthentication_not_valid:
    "Reauthentication code is incorrect. Please try again.",
  refresh_token_not_found: "The refresh token was not found.",
  refresh_token_already_used:
    "The refresh token has already been used and is no longer valid.",
  request_timeout: "The request took too long to process. Please try again.",
  same_password: "The new password cannot be the same as the current password.",
  saml_assertion_no_email:
    "The SAML assertion did not include an email address.",
  saml_assertion_no_user_id: "The SAML assertion did not include a user ID.",
  saml_entity_id_mismatch: "The SAML entity ID does not match the database.",
  saml_idp_already_exists: "The SAML identity provider already exists.",
  saml_idp_not_found: "The SAML identity provider was not found.",
  saml_metadata_fetch_failed:
    "Failed to fetch metadata for the SAML identity provider.",
  saml_provider_disabled: "SAML 2.0 Enterprise SSO is not enabled.",
  saml_relay_state_expired:
    "The SAML relay state has expired. Please sign in again.",
  saml_relay_state_not_found:
    "The SAML relay state was not found. Please sign in again.",
  session_expired: "The session has expired. Please log in again.",
  session_not_found: "The session no longer exists.",
  signup_disabled: "Sign-ups are disabled on the server.",
  single_identity_not_deletable:
    "The user must have at least one identity attached.",
  sms_send_failed:
    "SMS sending failed. Please check your SMS provider configuration.",
  sso_domain_already_exists: "The SSO domain is already registered.",
  sso_provider_not_found: "The SSO provider was not found.",
  too_many_enrolled_mfa_factors:
    "The user can only have a fixed number of enrolled MFA factors.",
  unexpected_audience:
    "The request's audience does not match the expected audience.",
  unexpected_failure: "An unexpected error occurred. Please try again later.",
  user_already_exists: "A user with this email or phone number already exists.",
  user_banned:
    "The user is banned. No further requests can be made until the ban is lifted.",
  user_not_found: "The user could not be found.",
  user_sso_managed:
    "Some user fields cannot be updated due to SSO restrictions.",
  validation_failed: "The provided parameters are not in the expected format.",
  weak_password: "The password is too weak. Please choose a stronger password.",
};

export const successMessages: { [key: string]: string } = {
  login_success: "You have successfully logged in.",
  logout_success: "Your have successfully logged out.",
  password_reset: "Your password has been reset successfully.",
  account_created: "Your account has been created successfully.",
  // Add more success codes and messages as needed
};
