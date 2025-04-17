function parseUplink(device, payload)
{
    // Obtener payload como JSON
    const jsonPayload = payload.asJsonObject();

    // No se puede deserializar el payload como json, salir.
    if (!jsonPayload) { return; }

    // Parsear y almacenar la temperatura
    // FN 21-03-22: se debe usar el posTimestamp para que la temperatura registrada corresponda al recorrido real del camión
    //
    if (jsonPayload.temperatura != null) {
        var temperatureSensor = device.endpoints.byAddress(1);
            temperatureSensor.updateTemperatureSensorStatus(jsonPayload.temperatura);
        }
}

function buildDownlink(device, endpoint, command, payload)
{
    payload.setAsString(command.custom.data);
    payload.requiresResponse = false;
	payload.buildResult = downlinkBuildResult.ok;
    return;
}