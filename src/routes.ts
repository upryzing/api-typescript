// This file was auto-generated by @insertish/oapi!
import { paths } from './schema';
export type APIRoutes =
| { method: 'get', path: `/`, parts: 1, params: undefined, response: paths['/']['get']['responses']['200']['content']['application/json'] }
| { method: 'get', path: `/admin/stats`, parts: 2, params: undefined, response: paths['/admin/stats']['get']['responses']['200']['content']['application/json'] }
| { method: 'post', path: `/admin/messages`, parts: 2, params: paths['/admin/messages']['post']['requestBody']['content']['application/json'], response: paths['/admin/messages']['post']['responses']['200']['content']['application/json'] }
| { method: 'get', path: `/users/@me`, parts: 2, params: undefined, response: paths['/users/@me']['get']['responses']['200']['content']['application/json'] }
| { method: 'get', path: `/users/${string}`, parts: 2, params: undefined, response: paths['/users/{target}']['get']['responses']['200']['content']['application/json'] }
| { method: 'get', path: '-/users/{target}', parts: 2, params: undefined, response: paths['/users/{target}']['get']['responses']['200']['content']['application/json'] }
| { method: 'patch', path: `/users/${string}`, parts: 2, params: paths['/users/{target}']['patch']['requestBody']['content']['application/json'], response: paths['/users/{target}']['patch']['responses']['200']['content']['application/json'] }
| { method: 'patch', path: '-/users/{target}', parts: 2, params: paths['/users/{target}']['patch']['requestBody']['content']['application/json'], response: paths['/users/{target}']['patch']['responses']['200']['content']['application/json'] }
| { method: 'get', path: `/users/${string}/flags`, parts: 3, params: undefined, response: paths['/users/{target}/flags']['get']['responses']['200']['content']['application/json'] }
| { method: 'get', path: '-/users/{target}/flags', parts: 3, params: undefined, response: paths['/users/{target}/flags']['get']['responses']['200']['content']['application/json'] }
| { method: 'patch', path: `/users/@me/username`, parts: 3, params: paths['/users/@me/username']['patch']['requestBody']['content']['application/json'], response: paths['/users/@me/username']['patch']['responses']['200']['content']['application/json'] }
| { method: 'get', path: `/users/${string}/default_avatar`, parts: 3, params: undefined, response: paths['/users/{target}/default_avatar']['get']['responses']['200']['content']['image/png'] }
| { method: 'get', path: '-/users/{target}/default_avatar', parts: 3, params: undefined, response: paths['/users/{target}/default_avatar']['get']['responses']['200']['content']['image/png'] }
| { method: 'get', path: `/users/${string}/profile`, parts: 3, params: undefined, response: paths['/users/{target}/profile']['get']['responses']['200']['content']['application/json'] }
| { method: 'get', path: '-/users/{target}/profile', parts: 3, params: undefined, response: paths['/users/{target}/profile']['get']['responses']['200']['content']['application/json'] }
| { method: 'get', path: `/users/dms`, parts: 2, params: undefined, response: paths['/users/dms']['get']['responses']['200']['content']['application/json'] }
| { method: 'get', path: `/users/${string}/dm`, parts: 3, params: undefined, response: paths['/users/{target}/dm']['get']['responses']['200']['content']['application/json'] }
| { method: 'get', path: '-/users/{target}/dm', parts: 3, params: undefined, response: paths['/users/{target}/dm']['get']['responses']['200']['content']['application/json'] }
| { method: 'get', path: `/users/${string}/mutual`, parts: 3, params: undefined, response: paths['/users/{target}/mutual']['get']['responses']['200']['content']['application/json'] }
| { method: 'get', path: '-/users/{target}/mutual', parts: 3, params: undefined, response: paths['/users/{target}/mutual']['get']['responses']['200']['content']['application/json'] }
| { method: 'put', path: `/users/${string}/friend`, parts: 3, params: undefined, response: paths['/users/{target}/friend']['put']['responses']['200']['content']['application/json'] }
| { method: 'put', path: '-/users/{target}/friend', parts: 3, params: undefined, response: paths['/users/{target}/friend']['put']['responses']['200']['content']['application/json'] }
| { method: 'delete', path: `/users/${string}/friend`, parts: 3, params: undefined, response: paths['/users/{target}/friend']['delete']['responses']['200']['content']['application/json'] }
| { method: 'delete', path: '-/users/{target}/friend', parts: 3, params: undefined, response: paths['/users/{target}/friend']['delete']['responses']['200']['content']['application/json'] }
| { method: 'put', path: `/users/${string}/block`, parts: 3, params: undefined, response: paths['/users/{target}/block']['put']['responses']['200']['content']['application/json'] }
| { method: 'put', path: '-/users/{target}/block', parts: 3, params: undefined, response: paths['/users/{target}/block']['put']['responses']['200']['content']['application/json'] }
| { method: 'delete', path: `/users/${string}/block`, parts: 3, params: undefined, response: paths['/users/{target}/block']['delete']['responses']['200']['content']['application/json'] }
| { method: 'delete', path: '-/users/{target}/block', parts: 3, params: undefined, response: paths['/users/{target}/block']['delete']['responses']['200']['content']['application/json'] }
| { method: 'post', path: `/users/friend`, parts: 2, params: paths['/users/friend']['post']['requestBody']['content']['application/json'], response: paths['/users/friend']['post']['responses']['200']['content']['application/json'] }
| { method: 'post', path: `/bots/create`, parts: 2, params: paths['/bots/create']['post']['requestBody']['content']['application/json'], response: paths['/bots/create']['post']['responses']['200']['content']['application/json'] }
| { method: 'get', path: `/bots/${string}/invite`, parts: 3, params: undefined, response: paths['/bots/{target}/invite']['get']['responses']['200']['content']['application/json'] }
| { method: 'get', path: '-/bots/{target}/invite', parts: 3, params: undefined, response: paths['/bots/{target}/invite']['get']['responses']['200']['content']['application/json'] }
| { method: 'post', path: `/bots/${string}/invite`, parts: 3, params: paths['/bots/{target}/invite']['post']['requestBody']['content']['application/json'], response: undefined }
| { method: 'post', path: '-/bots/{target}/invite', parts: 3, params: paths['/bots/{target}/invite']['post']['requestBody']['content']['application/json'], response: undefined }
| { method: 'get', path: `/bots/${string}`, parts: 2, params: undefined, response: paths['/bots/{bot}']['get']['responses']['200']['content']['application/json'] }
| { method: 'get', path: '-/bots/{bot}', parts: 2, params: undefined, response: paths['/bots/{bot}']['get']['responses']['200']['content']['application/json'] }
| { method: 'get', path: `/bots/@me`, parts: 2, params: undefined, response: paths['/bots/@me']['get']['responses']['200']['content']['application/json'] }
| { method: 'delete', path: `/bots/${string}`, parts: 2, params: undefined, response: undefined }
| { method: 'delete', path: '-/bots/{target}', parts: 2, params: undefined, response: undefined }
| { method: 'patch', path: `/bots/${string}`, parts: 2, params: paths['/bots/{target}']['patch']['requestBody']['content']['application/json'], response: paths['/bots/{target}']['patch']['responses']['200']['content']['application/json'] }
| { method: 'patch', path: '-/bots/{target}', parts: 2, params: paths['/bots/{target}']['patch']['requestBody']['content']['application/json'], response: paths['/bots/{target}']['patch']['responses']['200']['content']['application/json'] }
| { method: 'put', path: `/channels/${string}/ack/${string}`, parts: 4, params: undefined, response: undefined }
| { method: 'put', path: '-/channels/{target}/ack/{message}', parts: 4, params: undefined, response: undefined }
| { method: 'get', path: `/channels/${string}`, parts: 2, params: undefined, response: paths['/channels/{target}']['get']['responses']['200']['content']['application/json'] }
| { method: 'get', path: '-/channels/{target}', parts: 2, params: undefined, response: paths['/channels/{target}']['get']['responses']['200']['content']['application/json'] }
| { method: 'delete', path: `/channels/${string}`, parts: 2, params: paths['/channels/{target}']['delete']['parameters']['query'], response: undefined }
| { method: 'delete', path: '-/channels/{target}', parts: 2, params: paths['/channels/{target}']['delete']['parameters']['query'], response: undefined }
| { method: 'patch', path: `/channels/${string}`, parts: 2, params: paths['/channels/{target}']['patch']['requestBody']['content']['application/json'], response: paths['/channels/{target}']['patch']['responses']['200']['content']['application/json'] }
| { method: 'patch', path: '-/channels/{target}', parts: 2, params: paths['/channels/{target}']['patch']['requestBody']['content']['application/json'], response: paths['/channels/{target}']['patch']['responses']['200']['content']['application/json'] }
| { method: 'get', path: `/channels/${string}/members`, parts: 3, params: undefined, response: paths['/channels/{target}/members']['get']['responses']['200']['content']['application/json'] }
| { method: 'get', path: '-/channels/{target}/members', parts: 3, params: undefined, response: paths['/channels/{target}/members']['get']['responses']['200']['content']['application/json'] }
| { method: 'post', path: `/channels/${string}/invites`, parts: 3, params: undefined, response: paths['/channels/{target}/invites']['post']['responses']['200']['content']['application/json'] }
| { method: 'post', path: '-/channels/{target}/invites', parts: 3, params: undefined, response: paths['/channels/{target}/invites']['post']['responses']['200']['content']['application/json'] }
| { method: 'get', path: `/channels/${string}/messages`, parts: 3, params: paths['/channels/{target}/messages']['get']['parameters']['query'], response: paths['/channels/{target}/messages']['get']['responses']['200']['content']['application/json'] }
| { method: 'get', path: '-/channels/{target}/messages', parts: 3, params: paths['/channels/{target}/messages']['get']['parameters']['query'], response: paths['/channels/{target}/messages']['get']['responses']['200']['content']['application/json'] }
| { method: 'post', path: `/channels/${string}/messages`, parts: 3, params: paths['/channels/{target}/messages']['post']['requestBody']['content']['application/json'], response: paths['/channels/{target}/messages']['post']['responses']['200']['content']['application/json'] }
| { method: 'post', path: '-/channels/{target}/messages', parts: 3, params: paths['/channels/{target}/messages']['post']['requestBody']['content']['application/json'], response: paths['/channels/{target}/messages']['post']['responses']['200']['content']['application/json'] }
| { method: 'post', path: `/channels/${string}/search`, parts: 3, params: paths['/channels/{target}/search']['post']['requestBody']['content']['application/json'], response: paths['/channels/{target}/search']['post']['responses']['200']['content']['application/json'] }
| { method: 'post', path: '-/channels/{target}/search', parts: 3, params: paths['/channels/{target}/search']['post']['requestBody']['content']['application/json'], response: paths['/channels/{target}/search']['post']['responses']['200']['content']['application/json'] }
| { method: 'post', path: `/channels/${string}/messages/stale`, parts: 4, params: paths['/channels/{_target}/messages/stale']['post']['requestBody']['content']['application/json'], response: undefined }
| { method: 'post', path: '-/channels/{_target}/messages/stale', parts: 4, params: paths['/channels/{_target}/messages/stale']['post']['requestBody']['content']['application/json'], response: undefined }
| { method: 'get', path: `/channels/${string}/messages/${string}`, parts: 4, params: undefined, response: paths['/channels/{target}/messages/{msg}']['get']['responses']['200']['content']['application/json'] }
| { method: 'get', path: '-/channels/{target}/messages/{msg}', parts: 4, params: undefined, response: paths['/channels/{target}/messages/{msg}']['get']['responses']['200']['content']['application/json'] }
| { method: 'delete', path: `/channels/${string}/messages/${string}`, parts: 4, params: undefined, response: undefined }
| { method: 'delete', path: '-/channels/{target}/messages/{msg}', parts: 4, params: undefined, response: undefined }
| { method: 'patch', path: `/channels/${string}/messages/${string}`, parts: 4, params: paths['/channels/{target}/messages/{msg}']['patch']['requestBody']['content']['application/json'], response: paths['/channels/{target}/messages/{msg}']['patch']['responses']['200']['content']['application/json'] }
| { method: 'patch', path: '-/channels/{target}/messages/{msg}', parts: 4, params: paths['/channels/{target}/messages/{msg}']['patch']['requestBody']['content']['application/json'], response: paths['/channels/{target}/messages/{msg}']['patch']['responses']['200']['content']['application/json'] }
| { method: 'delete', path: `/channels/${string}/messages/bulk`, parts: 4, params: paths['/channels/{target}/messages/bulk']['delete']['requestBody']['content']['application/json'], response: undefined }
| { method: 'delete', path: '-/channels/{target}/messages/bulk', parts: 4, params: paths['/channels/{target}/messages/bulk']['delete']['requestBody']['content']['application/json'], response: undefined }
| { method: 'post', path: `/channels/create`, parts: 2, params: paths['/channels/create']['post']['requestBody']['content']['application/json'], response: paths['/channels/create']['post']['responses']['200']['content']['application/json'] }
| { method: 'put', path: `/channels/${string}/recipients/${string}`, parts: 4, params: undefined, response: undefined }
| { method: 'put', path: '-/channels/{target}/recipients/{member}', parts: 4, params: undefined, response: undefined }
| { method: 'delete', path: `/channels/${string}/recipients/${string}`, parts: 4, params: undefined, response: undefined }
| { method: 'delete', path: '-/channels/{target}/recipients/{member}', parts: 4, params: undefined, response: undefined }
| { method: 'post', path: `/channels/${string}/join_call`, parts: 3, params: undefined, response: paths['/channels/{target}/join_call']['post']['responses']['200']['content']['application/json'] }
| { method: 'post', path: '-/channels/{target}/join_call', parts: 3, params: undefined, response: paths['/channels/{target}/join_call']['post']['responses']['200']['content']['application/json'] }
| { method: 'put', path: `/channels/${string}/permissions/${string}`, parts: 4, params: paths['/channels/{target}/permissions/{role_id}']['put']['requestBody']['content']['application/json'], response: paths['/channels/{target}/permissions/{role_id}']['put']['responses']['200']['content']['application/json'] }
| { method: 'put', path: '-/channels/{target}/permissions/{role_id}', parts: 4, params: paths['/channels/{target}/permissions/{role_id}']['put']['requestBody']['content']['application/json'], response: paths['/channels/{target}/permissions/{role_id}']['put']['responses']['200']['content']['application/json'] }
| { method: 'put', path: `/channels/${string}/permissions/default`, parts: 4, params: paths['/channels/{target}/permissions/default']['put']['requestBody']['content']['application/json'], response: paths['/channels/{target}/permissions/default']['put']['responses']['200']['content']['application/json'] }
| { method: 'put', path: '-/channels/{target}/permissions/default', parts: 4, params: paths['/channels/{target}/permissions/default']['put']['requestBody']['content']['application/json'], response: paths['/channels/{target}/permissions/default']['put']['responses']['200']['content']['application/json'] }
| { method: 'put', path: `/channels/${string}/messages/${string}/reactions/${string}`, parts: 6, params: undefined, response: undefined }
| { method: 'put', path: '-/channels/{target}/messages/{msg}/reactions/{emoji}', parts: 6, params: undefined, response: undefined }
| { method: 'delete', path: `/channels/${string}/messages/${string}/reactions/${string}`, parts: 6, params: paths['/channels/{target}/messages/{msg}/reactions/{emoji}']['delete']['parameters']['query'], response: undefined }
| { method: 'delete', path: '-/channels/{target}/messages/{msg}/reactions/{emoji}', parts: 6, params: paths['/channels/{target}/messages/{msg}/reactions/{emoji}']['delete']['parameters']['query'], response: undefined }
| { method: 'delete', path: `/channels/${string}/messages/${string}/reactions`, parts: 5, params: undefined, response: undefined }
| { method: 'delete', path: '-/channels/{target}/messages/{msg}/reactions', parts: 5, params: undefined, response: undefined }
| { method: 'post', path: `/servers/create`, parts: 2, params: paths['/servers/create']['post']['requestBody']['content']['application/json'], response: paths['/servers/create']['post']['responses']['200']['content']['application/json'] }
| { method: 'get', path: `/servers/${string}`, parts: 2, params: paths['/servers/{target}']['get']['parameters']['query'], response: paths['/servers/{target}']['get']['responses']['200']['content']['application/json'] }
| { method: 'get', path: '-/servers/{target}', parts: 2, params: paths['/servers/{target}']['get']['parameters']['query'], response: paths['/servers/{target}']['get']['responses']['200']['content']['application/json'] }
| { method: 'delete', path: `/servers/${string}`, parts: 2, params: paths['/servers/{target}']['delete']['parameters']['query'], response: undefined }
| { method: 'delete', path: '-/servers/{target}', parts: 2, params: paths['/servers/{target}']['delete']['parameters']['query'], response: undefined }
| { method: 'patch', path: `/servers/${string}`, parts: 2, params: paths['/servers/{target}']['patch']['requestBody']['content']['application/json'], response: paths['/servers/{target}']['patch']['responses']['200']['content']['application/json'] }
| { method: 'patch', path: '-/servers/{target}', parts: 2, params: paths['/servers/{target}']['patch']['requestBody']['content']['application/json'], response: paths['/servers/{target}']['patch']['responses']['200']['content']['application/json'] }
| { method: 'put', path: `/servers/${string}/ack`, parts: 3, params: undefined, response: undefined }
| { method: 'put', path: '-/servers/{target}/ack', parts: 3, params: undefined, response: undefined }
| { method: 'post', path: `/servers/${string}/channels`, parts: 3, params: paths['/servers/{target}/channels']['post']['requestBody']['content']['application/json'], response: paths['/servers/{target}/channels']['post']['responses']['200']['content']['application/json'] }
| { method: 'post', path: '-/servers/{target}/channels', parts: 3, params: paths['/servers/{target}/channels']['post']['requestBody']['content']['application/json'], response: paths['/servers/{target}/channels']['post']['responses']['200']['content']['application/json'] }
| { method: 'get', path: `/servers/${string}/members`, parts: 3, params: paths['/servers/{target}/members']['get']['parameters']['query'], response: paths['/servers/{target}/members']['get']['responses']['200']['content']['application/json'] }
| { method: 'get', path: '-/servers/{target}/members', parts: 3, params: paths['/servers/{target}/members']['get']['parameters']['query'], response: paths['/servers/{target}/members']['get']['responses']['200']['content']['application/json'] }
| { method: 'get', path: `/servers/${string}/members/${string}`, parts: 4, params: undefined, response: paths['/servers/{target}/members/{member}']['get']['responses']['200']['content']['application/json'] }
| { method: 'get', path: '-/servers/{target}/members/{member}', parts: 4, params: undefined, response: paths['/servers/{target}/members/{member}']['get']['responses']['200']['content']['application/json'] }
| { method: 'delete', path: `/servers/${string}/members/${string}`, parts: 4, params: undefined, response: undefined }
| { method: 'delete', path: '-/servers/{target}/members/{member}', parts: 4, params: undefined, response: undefined }
| { method: 'patch', path: `/servers/${string}/members/${string}`, parts: 4, params: paths['/servers/{server}/members/{target}']['patch']['requestBody']['content']['application/json'], response: paths['/servers/{server}/members/{target}']['patch']['responses']['200']['content']['application/json'] }
| { method: 'patch', path: '-/servers/{server}/members/{target}', parts: 4, params: paths['/servers/{server}/members/{target}']['patch']['requestBody']['content']['application/json'], response: paths['/servers/{server}/members/{target}']['patch']['responses']['200']['content']['application/json'] }
| { method: 'get', path: `/servers/${string}/members_experimental_query`, parts: 3, params: paths['/servers/{target}/members_experimental_query']['get']['parameters']['query'], response: paths['/servers/{target}/members_experimental_query']['get']['responses']['200']['content']['application/json'] }
| { method: 'get', path: '-/servers/{target}/members_experimental_query', parts: 3, params: paths['/servers/{target}/members_experimental_query']['get']['parameters']['query'], response: paths['/servers/{target}/members_experimental_query']['get']['responses']['200']['content']['application/json'] }
| { method: 'put', path: `/servers/${string}/bans/${string}`, parts: 4, params: paths['/servers/{server}/bans/{target}']['put']['requestBody']['content']['application/json'], response: paths['/servers/{server}/bans/{target}']['put']['responses']['200']['content']['application/json'] }
| { method: 'put', path: '-/servers/{server}/bans/{target}', parts: 4, params: paths['/servers/{server}/bans/{target}']['put']['requestBody']['content']['application/json'], response: paths['/servers/{server}/bans/{target}']['put']['responses']['200']['content']['application/json'] }
| { method: 'delete', path: `/servers/${string}/bans/${string}`, parts: 4, params: undefined, response: undefined }
| { method: 'delete', path: '-/servers/{server}/bans/{target}', parts: 4, params: undefined, response: undefined }
| { method: 'get', path: `/servers/${string}/bans`, parts: 3, params: undefined, response: paths['/servers/{target}/bans']['get']['responses']['200']['content']['application/json'] }
| { method: 'get', path: '-/servers/{target}/bans', parts: 3, params: undefined, response: paths['/servers/{target}/bans']['get']['responses']['200']['content']['application/json'] }
| { method: 'get', path: `/servers/${string}/invites`, parts: 3, params: undefined, response: paths['/servers/{target}/invites']['get']['responses']['200']['content']['application/json'] }
| { method: 'get', path: '-/servers/{target}/invites', parts: 3, params: undefined, response: paths['/servers/{target}/invites']['get']['responses']['200']['content']['application/json'] }
| { method: 'post', path: `/servers/${string}/roles`, parts: 3, params: paths['/servers/{target}/roles']['post']['requestBody']['content']['application/json'], response: paths['/servers/{target}/roles']['post']['responses']['200']['content']['application/json'] }
| { method: 'post', path: '-/servers/{target}/roles', parts: 3, params: paths['/servers/{target}/roles']['post']['requestBody']['content']['application/json'], response: paths['/servers/{target}/roles']['post']['responses']['200']['content']['application/json'] }
| { method: 'delete', path: `/servers/${string}/roles/${string}`, parts: 4, params: undefined, response: undefined }
| { method: 'delete', path: '-/servers/{target}/roles/{role_id}', parts: 4, params: undefined, response: undefined }
| { method: 'patch', path: `/servers/${string}/roles/${string}`, parts: 4, params: paths['/servers/{target}/roles/{role_id}']['patch']['requestBody']['content']['application/json'], response: paths['/servers/{target}/roles/{role_id}']['patch']['responses']['200']['content']['application/json'] }
| { method: 'patch', path: '-/servers/{target}/roles/{role_id}', parts: 4, params: paths['/servers/{target}/roles/{role_id}']['patch']['requestBody']['content']['application/json'], response: paths['/servers/{target}/roles/{role_id}']['patch']['responses']['200']['content']['application/json'] }
| { method: 'put', path: `/servers/${string}/permissions/${string}`, parts: 4, params: paths['/servers/{target}/permissions/{role_id}']['put']['requestBody']['content']['application/json'], response: paths['/servers/{target}/permissions/{role_id}']['put']['responses']['200']['content']['application/json'] }
| { method: 'put', path: '-/servers/{target}/permissions/{role_id}', parts: 4, params: paths['/servers/{target}/permissions/{role_id}']['put']['requestBody']['content']['application/json'], response: paths['/servers/{target}/permissions/{role_id}']['put']['responses']['200']['content']['application/json'] }
| { method: 'put', path: `/servers/${string}/permissions/default`, parts: 4, params: paths['/servers/{target}/permissions/default']['put']['requestBody']['content']['application/json'], response: paths['/servers/{target}/permissions/default']['put']['responses']['200']['content']['application/json'] }
| { method: 'put', path: '-/servers/{target}/permissions/default', parts: 4, params: paths['/servers/{target}/permissions/default']['put']['requestBody']['content']['application/json'], response: paths['/servers/{target}/permissions/default']['put']['responses']['200']['content']['application/json'] }
| { method: 'get', path: `/servers/${string}/emojis`, parts: 3, params: undefined, response: paths['/servers/{target}/emojis']['get']['responses']['200']['content']['application/json'] }
| { method: 'get', path: '-/servers/{target}/emojis', parts: 3, params: undefined, response: paths['/servers/{target}/emojis']['get']['responses']['200']['content']['application/json'] }
| { method: 'get', path: `/invites/${string}`, parts: 2, params: undefined, response: paths['/invites/{target}']['get']['responses']['200']['content']['application/json'] }
| { method: 'get', path: '-/invites/{target}', parts: 2, params: undefined, response: paths['/invites/{target}']['get']['responses']['200']['content']['application/json'] }
| { method: 'post', path: `/invites/${string}`, parts: 2, params: undefined, response: paths['/invites/{target}']['post']['responses']['200']['content']['application/json'] }
| { method: 'post', path: '-/invites/{target}', parts: 2, params: undefined, response: paths['/invites/{target}']['post']['responses']['200']['content']['application/json'] }
| { method: 'delete', path: `/invites/${string}`, parts: 2, params: undefined, response: undefined }
| { method: 'delete', path: '-/invites/{target}', parts: 2, params: undefined, response: undefined }
| { method: 'get', path: `/custom/emoji/${string}`, parts: 3, params: undefined, response: paths['/custom/emoji/{id}']['get']['responses']['200']['content']['application/json'] }
| { method: 'get', path: '-/custom/emoji/{id}', parts: 3, params: undefined, response: paths['/custom/emoji/{id}']['get']['responses']['200']['content']['application/json'] }
| { method: 'put', path: `/custom/emoji/${string}`, parts: 3, params: paths['/custom/emoji/{id}']['put']['requestBody']['content']['application/json'], response: paths['/custom/emoji/{id}']['put']['responses']['200']['content']['application/json'] }
| { method: 'put', path: '-/custom/emoji/{id}', parts: 3, params: paths['/custom/emoji/{id}']['put']['requestBody']['content']['application/json'], response: paths['/custom/emoji/{id}']['put']['responses']['200']['content']['application/json'] }
| { method: 'delete', path: `/custom/emoji/${string}`, parts: 3, params: undefined, response: undefined }
| { method: 'delete', path: '-/custom/emoji/{id}', parts: 3, params: undefined, response: undefined }
| { method: 'patch', path: `/safety/reports/${string}`, parts: 3, params: paths['/safety/reports/{report}']['patch']['requestBody']['content']['application/json'], response: paths['/safety/reports/{report}']['patch']['responses']['200']['content']['application/json'] }
| { method: 'patch', path: '-/safety/reports/{report}', parts: 3, params: paths['/safety/reports/{report}']['patch']['requestBody']['content']['application/json'], response: paths['/safety/reports/{report}']['patch']['responses']['200']['content']['application/json'] }
| { method: 'get', path: `/safety/report/${string}`, parts: 3, params: undefined, response: paths['/safety/report/{id}']['get']['responses']['200']['content']['application/json'] }
| { method: 'get', path: '-/safety/report/{id}', parts: 3, params: undefined, response: paths['/safety/report/{id}']['get']['responses']['200']['content']['application/json'] }
| { method: 'get', path: `/safety/reports`, parts: 2, params: paths['/safety/reports']['get']['parameters']['query'], response: paths['/safety/reports']['get']['responses']['200']['content']['application/json'] }
| { method: 'post', path: `/safety/report`, parts: 2, params: paths['/safety/report']['post']['requestBody']['content']['application/json'], response: undefined }
| { method: 'get', path: `/safety/snapshot/${string}`, parts: 3, params: undefined, response: paths['/safety/snapshot/{report_id}']['get']['responses']['200']['content']['application/json'] }
| { method: 'get', path: '-/safety/snapshot/{report_id}', parts: 3, params: undefined, response: paths['/safety/snapshot/{report_id}']['get']['responses']['200']['content']['application/json'] }
| { method: 'get', path: `/safety/strikes/${string}`, parts: 3, params: undefined, response: paths['/safety/strikes/{user_id}']['get']['responses']['200']['content']['application/json'] }
| { method: 'get', path: '-/safety/strikes/{user_id}', parts: 3, params: undefined, response: paths['/safety/strikes/{user_id}']['get']['responses']['200']['content']['application/json'] }
| { method: 'post', path: `/safety/strikes/${string}`, parts: 3, params: paths['/safety/strikes/{strike_id}']['post']['requestBody']['content']['application/json'], response: undefined }
| { method: 'post', path: '-/safety/strikes/{strike_id}', parts: 3, params: paths['/safety/strikes/{strike_id}']['post']['requestBody']['content']['application/json'], response: undefined }
| { method: 'delete', path: `/safety/strikes/${string}`, parts: 3, params: undefined, response: undefined }
| { method: 'delete', path: '-/safety/strikes/{strike_id}', parts: 3, params: undefined, response: undefined }
| { method: 'post', path: `/auth/account/create`, parts: 3, params: paths['/auth/account/create']['post']['requestBody']['content']['application/json'], response: undefined }
| { method: 'post', path: `/auth/account/reverify`, parts: 3, params: paths['/auth/account/reverify']['post']['requestBody']['content']['application/json'], response: undefined }
| { method: 'put', path: `/auth/account/delete`, parts: 3, params: paths['/auth/account/delete']['put']['requestBody']['content']['application/json'], response: undefined }
| { method: 'post', path: `/auth/account/delete`, parts: 3, params: undefined, response: undefined }
| { method: 'get', path: `/auth/account/`, parts: 3, params: undefined, response: paths['/auth/account/']['get']['responses']['200']['content']['application/json'] }
| { method: 'post', path: `/auth/account/disable`, parts: 3, params: undefined, response: undefined }
| { method: 'patch', path: `/auth/account/change/password`, parts: 4, params: paths['/auth/account/change/password']['patch']['requestBody']['content']['application/json'], response: undefined }
| { method: 'patch', path: `/auth/account/change/email`, parts: 4, params: paths['/auth/account/change/email']['patch']['requestBody']['content']['application/json'], response: undefined }
| { method: 'post', path: `/auth/account/verify/${string}`, parts: 4, params: undefined, response: paths['/auth/account/verify/{code}']['post']['responses']['200']['content']['application/json'] }
| { method: 'post', path: '-/auth/account/verify/{code}', parts: 4, params: undefined, response: paths['/auth/account/verify/{code}']['post']['responses']['200']['content']['application/json'] }
| { method: 'post', path: `/auth/account/reset_password`, parts: 3, params: paths['/auth/account/reset_password']['post']['requestBody']['content']['application/json'], response: undefined }
| { method: 'patch', path: `/auth/account/reset_password`, parts: 3, params: paths['/auth/account/reset_password']['patch']['requestBody']['content']['application/json'], response: undefined }
| { method: 'post', path: `/auth/session/login`, parts: 3, params: paths['/auth/session/login']['post']['requestBody']['content']['application/json'], response: paths['/auth/session/login']['post']['responses']['200']['content']['application/json'] }
| { method: 'post', path: `/auth/session/logout`, parts: 3, params: undefined, response: undefined }
| { method: 'get', path: `/auth/session/all`, parts: 3, params: undefined, response: paths['/auth/session/all']['get']['responses']['200']['content']['application/json'] }
| { method: 'delete', path: `/auth/session/all`, parts: 3, params: paths['/auth/session/all']['delete']['parameters']['query'], response: undefined }
| { method: 'delete', path: `/auth/session/${string}`, parts: 3, params: undefined, response: undefined }
| { method: 'delete', path: '-/auth/session/{id}', parts: 3, params: undefined, response: undefined }
| { method: 'patch', path: `/auth/session/${string}`, parts: 3, params: paths['/auth/session/{id}']['patch']['requestBody']['content']['application/json'], response: paths['/auth/session/{id}']['patch']['responses']['200']['content']['application/json'] }
| { method: 'patch', path: '-/auth/session/{id}', parts: 3, params: paths['/auth/session/{id}']['patch']['requestBody']['content']['application/json'], response: paths['/auth/session/{id}']['patch']['responses']['200']['content']['application/json'] }
| { method: 'put', path: `/auth/mfa/ticket`, parts: 3, params: paths['/auth/mfa/ticket']['put']['requestBody']['content']['application/json'], response: paths['/auth/mfa/ticket']['put']['responses']['200']['content']['application/json'] }
| { method: 'get', path: `/auth/mfa/`, parts: 3, params: undefined, response: paths['/auth/mfa/']['get']['responses']['200']['content']['application/json'] }
| { method: 'post', path: `/auth/mfa/recovery`, parts: 3, params: undefined, response: paths['/auth/mfa/recovery']['post']['responses']['200']['content']['application/json'] }
| { method: 'patch', path: `/auth/mfa/recovery`, parts: 3, params: undefined, response: paths['/auth/mfa/recovery']['patch']['responses']['200']['content']['application/json'] }
| { method: 'get', path: `/auth/mfa/methods`, parts: 3, params: undefined, response: paths['/auth/mfa/methods']['get']['responses']['200']['content']['application/json'] }
| { method: 'put', path: `/auth/mfa/totp`, parts: 3, params: paths['/auth/mfa/totp']['put']['requestBody']['content']['application/json'], response: undefined }
| { method: 'post', path: `/auth/mfa/totp`, parts: 3, params: undefined, response: paths['/auth/mfa/totp']['post']['responses']['200']['content']['application/json'] }
| { method: 'delete', path: `/auth/mfa/totp`, parts: 3, params: undefined, response: undefined }
| { method: 'get', path: `/onboard/hello`, parts: 2, params: undefined, response: paths['/onboard/hello']['get']['responses']['200']['content']['application/json'] }
| { method: 'post', path: `/onboard/complete`, parts: 2, params: paths['/onboard/complete']['post']['requestBody']['content']['application/json'], response: undefined }
| { method: 'post', path: `/push/subscribe`, parts: 2, params: paths['/push/subscribe']['post']['requestBody']['content']['application/json'], response: undefined }
| { method: 'post', path: `/push/unsubscribe`, parts: 2, params: undefined, response: undefined }
| { method: 'post', path: `/sync/settings/fetch`, parts: 3, params: paths['/sync/settings/fetch']['post']['requestBody']['content']['application/json'], response: paths['/sync/settings/fetch']['post']['responses']['200']['content']['application/json'] }
| { method: 'post', path: `/sync/settings/set`, parts: 3, params: paths['/sync/settings/set']['post']['parameters']['query']|paths['/sync/settings/set']['post']['requestBody']['content']['application/json'], response: undefined }
| { method: 'get', path: `/sync/unreads`, parts: 2, params: undefined, response: paths['/sync/unreads']['get']['responses']['200']['content']['application/json'] };