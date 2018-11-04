Template.cancelTeamModal.helpers

	getShiftId: -> FlowRouter.getQueryParam('shiftId')

	getTeamId: -> FlowRouter.getQueryParam('cancelTeam')

Template.cancelTeamModal.onRendered ->

	$('#beamerSelector').addClass('hidden')

	$('#cancelTeamModal').modal('show')
	$('#cancelTeamModal').on 'hidden.bs.modal', ->
		wrs -> FlowRouter.setQueryParams cancelTeam: null, shiftId: null

	$('#message').focus()

Template.cancelTeamModal.onDestroyed ->

	$('#beamerSelector').removeClass('hidden')

Template.cancelTeamModal.events

	'click #cancelTeam': ->
		shiftId = FlowRouter.getQueryParam('shiftId')
		teamId = FlowRouter.getQueryParam('cancelTeam')
		message = $('#message').val()

		Meteor.call 'cancelTeam', shiftId, teamId, message
